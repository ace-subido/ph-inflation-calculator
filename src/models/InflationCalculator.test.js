import InflationCalculator from "./InflationCalculator"

describe(".calculate()", () => {
  it("calculates inflation based from baseYear and comparisonYear", () => {
    const calculator = new InflationCalculator({
      baseYear: 1980,
      indexYear: 2018,
      baseAmount: 5000,
    })

    calculator.calculate()

    expect(calculator.indexAmount).toEqual(94646.85)
    expect(calculator.percentageIncrease).toEqual(1792.94)
  })
})
