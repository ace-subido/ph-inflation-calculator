import * as _ from "lodash"
import * as InflationData from "../data/inflation.json"

class InflationCalculator {
  constructor(props) {
    this.props = _.merge(
      props,
      { baseAmount: Number(props.baseAmount) },
    )
  }

  calculate() {
    this.indexAmount = _.round(this.calculateIndexAmount(), 2)
    this.percentageIncrease = _.round(
      -this.calculatePercentageIncrease(),
      3
    )
  }

  calculateIndexAmount() {
    var indexAmount = this.props.baseAmount

    let filteredYears = InflationData.data.filter((inflationPoint) => {
      return inflationPoint.year >= this.props.baseYear &&
        inflationPoint.year <= this.props.indexYear
    })

    filteredYears.forEach((inflationPoint) => {
      indexAmount = indexAmount + (indexAmount * (inflationPoint.value / 100))
    })

    return indexAmount
  }

  calculatePercentageIncrease() {
    let difference = this.props.baseAmount - this.indexAmount
    return (difference / this.props.baseAmount) * 100.0
  }
}

export default InflationCalculator
