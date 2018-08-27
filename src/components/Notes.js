import React from "react"
import ShareButton from "./ShareButton"
import { SITE_URL, BASE_URL } from "../constants/LinkConstants"

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
      <div className="btn-row">
        <ShareButton 
          icon="fb"
          link={`https://facebook.com/sharer/sharer.php?u=${SITE_URL}`}
          socialNetwork="Facebook" 
        />
        <ShareButton
          icon="twitter"
          link={`https://twitter.com/intent/tweet?url=${SITE_URL}`}
          socialNetwork="Twitter"
        />
      </div>
      <footer>
        Philippine Inflation Calculator &middot;&nbsp;
        <a href={BASE_URL}>Ace Subido</a>
      </footer>
    </div>
  )
}

export default Notes;
