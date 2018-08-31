import React, { Component } from "react"
import * as accounting from "accounting"
import * as _ from "lodash"

import * as InflationData from "../data/inflation.json"
import InflationCalculator from "../models/InflationCalculator"

import YearSelect from "./YearSelect"
import CalculatorResult from "./CalculatorResult"

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseAmount: 0,
      baseYear: 1970,
      comparisonYear: _.last(InflationData.data).year,
      calculatedAmount: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target

    if(target.name === "baseAmount" && target.value.includes("-")) {
      return false
    }

    let currentState = _.merge(
      this.state,
      { [target.name]: Number(target.value) }
    )

    let calculatorProps = _.merge(
      { indexYear: currentState.comparisonYear },
      _.pick(currentState, "baseAmount", "baseYear")
    )

    const inflationCalculator = new InflationCalculator(calculatorProps)

    inflationCalculator.calculate()

    this.setState(
      _.merge(currentState, {
        calculatedAmount: inflationCalculator.indexAmount,
        percentageIncrease: inflationCalculator.percentageIncrease,
      })
    )
  }

  render() {
    const yearList = InflationData.data;
    const comparisonYearList = yearList.filter((inflationPoint) => {
      return inflationPoint.year >= this.state.baseYear
    })

    let displayCalculatedAmount = accounting.formatMoney(
      this.state.calculatedAmount,
      "₱",
    )
    let displayPercentageAmount = accounting.formatNumber(
      this.state.percentageIncrease, 2
    )

    return (
      <div className="Calculator">
        <form>
          <div className="Calculator-baseInputs">
            In
            <YearSelect
              name="baseYear"
              defaultValue={this.state.baseYear}
              inflationPoints={yearList}
              changeEventHandler={this.handleInputChange}
            />
            the goods you can buy for
            <div className="amount-input">
              <span className="amount-input-sign">₱</span>
              <input
                type="number"
                name="baseAmount"
                step="any"
                value={this.state.baseAmount}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="Calculator-indexInputs">
            At the end of
            <YearSelect
              name="comparisonYear"
              defaultValue={this.state.comparisonYear}
              inflationPoints={comparisonYearList}
              changeEventHandler={this.handleInputChange}
            />
            would roughly cost you
            <CalculatorResult
              calculatedAmount={displayCalculatedAmount}
              percentageAmount={displayPercentageAmount}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default Calculator
