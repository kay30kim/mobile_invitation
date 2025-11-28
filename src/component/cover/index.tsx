import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

export const Cover = () => {
  return (
    <LazyDiv className="card cover-fullscreen">
      <img className="cover-bg" src={COVER_IMAGE} alt="cover" />

      <div className="cover-text">
        <div className="welcome">Welcome to</div>

        <div className="names">
          {GROOM_FULLNAME} & {BRIDE_FULLNAME}
        </div>

        <div className="subtitle">Happy Wedding Day</div>

        <div className="date">
          {WEDDING_DATE.format("YYYY.MM.DD")}
        </div>
      </div>
    </LazyDiv>
  )
}

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

// export const Cover = () => {
//   return (
//     <LazyDiv className="card cover">
//       <div className="wedding-date">
//         {WEDDING_DATE.format("YYYY")}
//         <div className="divider" />
//         {WEDDING_DATE.format("MM")}
//         <div className="divider" />
//         {WEDDING_DATE.format("DD")}
//       </div>
//       <div className="wedding-day-of-week">
//         {DAY_OF_WEEK[WEDDING_DATE.day()]}
//       </div>
//       <div className="image-wrapper">
//         <img src={COVER_IMAGE} alt="sample" />
//       </div>
//       <div className="subtitle">Save the date for the wedding of</div>
//       <div className="names">
//         {GROOM_FULLNAME}
//         <div className="divider" />
//         {BRIDE_FULLNAME}
//       </div>
//       <div className="info">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
//       <div className="info">{LOCATION}</div>
//     </LazyDiv>
//   )
// }
