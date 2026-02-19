import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"
import { useLanguage } from "../../context/LanguageContext"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const Cover = () => {
  const { language, setLanguage } = useLanguage()
  return (
    <LazyDiv className="card cover">
      {/* <div className="language-toggle" style={{ position: "absolute", top: "1rem", right: "1rem" }}>
        <button
          type="button"
          aria-pressed={language === "ko"}
          onClick={() => setLanguage("ko")}
          style={{ fontWeight: language === "ko" ? "bold" : "normal", marginRight: "0.5rem" }}
        >
          KO
        </button>
        <button
          type="button"
          aria-pressed={language === "en"}
          onClick={() => setLanguage("en")}
          style={{ fontWeight: language === "en" ? "bold" : "normal" }}
        >
          EN
        </button>
      </div> */}
      <div className="wedding-date">
        {WEDDING_DATE.format("YYYY")}
        <div className="divider" />
        {WEDDING_DATE.format("MM")}
        <div className="divider" />
        {WEDDING_DATE.format("DD")}
      </div>
      <div className="wedding-day-of-week">
        {DAY_OF_WEEK[WEDDING_DATE.day()]}
      </div>
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      </div>
      <div className="subtitle">Save the date for the wedding of</div>
      <div className="names">
        {GROOM_FULLNAME}
        ❤️
        {BRIDE_FULLNAME}
      </div>
      <div className="info">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
      <div className="info">{LOCATION}</div>
    </LazyDiv>
  )
}
