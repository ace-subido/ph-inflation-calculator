import React from "react";

const ABOUT_LINK = "https://ace-subido.github.io"
const REFERENCES = [
  {
    description: "1960 - 2012 - International Monetary Fund, International Financial Statistics",
    link: "https://www.indexmundi.com/facts/philippines/inflation",
  },
  {
    description: "2012 - 2018 - Bangko Sentral ng Pilipinas",
    link: "http://www.bsp.gov.ph/statistics/spei_new/tab34_inf.htm",
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
        <a href={ABOUT_LINK}>Ace Subido</a>
      </footer>
    </div>
  )
}

export default Notes;
