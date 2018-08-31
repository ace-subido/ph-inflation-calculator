import React from "react"
import PropTypes from "prop-types"

const CalculatorResult = ({ calculatedAmount, percentageAmount }) => {
  return(
    <div className="CalculatorResult">
      &nbsp;<strong>{calculatedAmount}</strong>
      &nbsp;(<strong>{percentageAmount}%</strong> increase)
    </div>
  )
}

const propTypes = {
  calculatedAmount: PropTypes.string,
  percentageAmount: PropTypes.string,
}

CalculatorResult.propTypes = propTypes

export default CalculatorResult
