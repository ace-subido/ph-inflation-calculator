import React, { Component } from "react"
import * as accounting from "accounting"
import * as _ from "lodash"

import * as InflationData from "../data/inflation.json"
import InflationCalculator from "../models/InflationCalculator"

import YearSelect from "./YearSelect"

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    let calculatorProps = _.merge(
      { indexYear: this.state.comparisonYear },
      _.pick(this.state, "baseAmount", "baseYear")
    )

    const inflationCalculator = new InflationCalculator(calculatorProps)

    inflationCalculator.calculate()

    this.setState({
      calculatedAmount: inflationCalculator.indexAmount,
      percentageIncrease: inflationCalculator.percentageIncrease,
    })
  }

  handleInputChange(event) {
    const target = event.target
    this.setState({ [target.name]: target.value })
  }

  render() {
    const yearList = InflationData.data;
    const comparisonYearList = yearList.filter((inflationPoint) => {
      return inflationPoint.year > this.state.baseYear
    })

    let displayCalculatedAmount = accounting.formatMoney(
      this.state.calculatedAmount,
      "₱",
    )
    let displayPercentageAmount = accounting.formatNumber(
      this.state.percentageIncrease,
    )

    return (
      <div className="Calculator">
        <form onSubmit={this.handleSubmit}>
          <div className="Calculator-baseInputs">
            In
            <YearSelect
              name="baseYear"
              defaultValue={this.state.baseYear}
              inflationPoints={yearList}
              changeEventHandler={this.handleInputChange}
            />
            if something is worth
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
            In
            <YearSelect
              name="comparisonYear"
              defaultValue={this.state.comparisonYear}
              inflationPoints={comparisonYearList}
              changeEventHandler={this.handleInputChange}
            />
            it would, roughly, be worth
            &nbsp;<strong>{displayCalculatedAmount}</strong>
            &nbsp;(<strong>{displayPercentageAmount}%</strong> increase)
          </div>
          <button className="btn" type="submit">Calculate</button>
        </form>
      </div>
    )
  }
}

export default Calculator
