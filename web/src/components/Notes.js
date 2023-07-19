import React from "react"
import { BASE_URL } from "../constants/LinkConstants"

const REFERENCES = [
  {
    description: "1960 - 2011 - International Monetary Fund, International Financial Statistics",
    link: "https://www.indexmundi.com/facts/philippines/inflation",
  },
  {
    description: "2012 - 2018 - Bangko Sentral ng Pilipinas",
    link: "https://www.bsp.gov.ph/Statistics/Prices/tab34_inf.aspx",
  },
  {
    description: "2019 - 2022 - Bangko Sentral ng Pilipinas",
    link: "https://www.bsp.gov.ph/statistics/Prices/tab34_inf_2018_data.aspx",
  }
]

const Notes = () => {
  let references = REFERENCES.map((reference) => {
    return(
      <li key={reference.link}>
        <a href={reference.link}>
          {reference.description}
        </a>
      </li>
    )
  })

  return(
    <div className="Notes">
      <p>
        A calculator to see how prices in the Philippines has changed over the
        course of time. Results are intended as a guide, not to serve as
        calculations for official documents.
      </p>
      <strong>Data References</strong>
      <ul>{references}</ul>
      <footer>
        Philippine Inflation Calculator &middot;&nbsp;
        <a href={BASE_URL}>Ace Subido</a>
      </footer>
    </div>
  )
}

export default Notes;
