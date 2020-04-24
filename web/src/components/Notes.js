import React from "react"
import { BASE_URL } from "../constants/LinkConstants"
import qr from "../assets/qr.png"

const REFERENCES = [
  {
    description: "1960 - 2011 - International Monetary Fund, International Financial Statistics",
    link: "https://www.indexmundi.com/facts/philippines/inflation",
  },
  {
    description: "2012 - 2020 - Bangko Sentral ng Pilipinas",
    link: "http://www.bsp.gov.ph/statistics/spei_new/tab34_inf.htm",
  }
]

const ADDRESS = "1JaEkNVa2oRjZUSvgjf15wuM3EB7FSYSdo"

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
  let address = ADDRESS

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
        <br/>
        <div class="donate">
          <p>
            If this helped you in any way and want to donate, consider donating using Bitcoin (BTC)
          </p>
          <p> {address} </p>
          <div class="qr">
            <img src={qr} alt={address}/>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Notes;
