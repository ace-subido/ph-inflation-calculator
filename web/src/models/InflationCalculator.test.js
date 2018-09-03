import InflationCalculator from "./InflationCalculator"

describe(".calculate()", () => {
  it("calculates inflation based from baseYear and comparisonYear", () => {
    const calculator = new InflationCalculator({
      baseYear: 1980,
      indexYear: 2018,
      baseAmount: 5000,
    })

    calculator.calculate()

    expect(calculator.indexAmount).toEqual(99703.34)
    expect(calculator.percentageIncrease).toEqual(1894.07)
  })
})
