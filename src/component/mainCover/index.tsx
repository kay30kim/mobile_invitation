import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { MAIN_COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"
import "./index.scss"
import { useLanguage } from "../../context/LanguageContext"
import { TRANSLATIONS } from "../../const"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const MainCover = () => {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language]
  return (
    <LazyDiv className="card cover">
      <div className="image-wrapper">
        <img src={MAIN_COVER_IMAGE} alt="sample" />
      </div>
      <div className="cover-text">

        {/* 상단 */}
        <div className="top-section">
          <div className="welcome">Welcome to</div>
          <div className="names">Kyungho Kim & Chaehee Kim</div>
        </div>

        {/* 중앙 */}
        <div className="middle-section">
          <div className="happy-wedding">Happy</div>
          <div className="happy-wedding">Wedding Day</div>
        </div>

        {/* 하단 */}
        <div className="bottom-section">
          <span className="line">{t.dateText}</span>
          <span className="line">{t.locationText}</span>
        </div>
      </div>
    </LazyDiv>
  )
}

// export const MainCover = () => {
//   return (
//     <LazyDiv className="card cover">
//       <div className="image-wrapper">
//         <img src={COVER_IMAGE} alt="sample" />
//       </div>
//     </LazyDiv>
//   )
// }
