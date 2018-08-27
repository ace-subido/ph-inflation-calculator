import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  inflationPoints: PropTypes.array,
  changeEventHandler: PropTypes.func,
  name: PropTypes.string,
  defaultValue: PropTypes.number,
}

const YearSelect = ({
  name,
  inflationPoints,
  defaultValue,
  changeEventHandler
}) => {
  const options = inflationPoints.map((inflationPoint) => {
    return(
      <option key={inflationPoint.year} value={inflationPoint.year}>
        {inflationPoint.year}
      </option>
    )
  })

  return(
    <select
      name={name}
      value={defaultValue}
      onChange={changeEventHandler}
    >
      {options}
    </select>
  )
}

YearSelect.propTypes = propTypes

export default YearSelect;
