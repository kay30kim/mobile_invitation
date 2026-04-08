import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  SHARE_ADDRESS,
  SHARE_ADDRESS_TITLE,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

const baseUrl = import.meta.env.BASE_URL

export const ShareButton = () => {
  const kakao = useKakao()

  const handleKakaoShare = () => {
    if (!kakao) {
      const shareUrl = "https://kay30kim.github.io/mobile_invitation/"
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert(
          "초대 링크가 클립보드에 복사되었습니다.\n카카오톡 앱을 열어 붙여넣기 해주세요."
        )
      }).catch(() => {
        alert("초대 링크: " + shareUrl + "\n카카오톡으로 공유해주세요.")
      })
      return
    }

    try {
      kakao.Share.sendDefault({
        objectType: "location",
        address: SHARE_ADDRESS,
        addressTitle: SHARE_ADDRESS_TITLE,
        content: {
          title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
          description: WEDDING_DATE.format(WEDDING_DATE_FORMAT) + "\n" + LOCATION,
          imageUrl: new URL(`${baseUrl}preview_image.jpg?v=1`, window.location.origin).href,
          link: {
            mobileWebUrl: window.location.origin + baseUrl,
            webUrl: window.location.origin + baseUrl,
          },
        },
        buttons: [
          {
            title: "초대장 보기",
            link: {
              mobileWebUrl: window.location.origin + baseUrl,
              webUrl: window.location.origin + baseUrl,
            },
          },
        ],
      })
    } catch (error) {
      console.error("카카오톡 공유 실패:", error)
      alert("공유에 실패했습니다.")
    }
  }

  return (
    <LazyDiv className="footer share-button">
      <button className="ktalk-share" onClick={handleKakaoShare}>
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}
// export const ShareButton = () => {
//   const kakao = useKakao()
//   return (
//     <LazyDiv className="footer share-button">
//       <button
//         className="ktalk-share"
//         onClick={() => {
//           if (!kakao) {
//             return
//           }

//           kakao.Share.sendDefault({
//             objectType: "location",
//             address: SHARE_ADDRESS,
//             addressTitle: SHARE_ADDRESS_TITLE,
//             content: {
//               title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
//               description:
//                 WEDDING_DATE.format(WEDDING_DATE_FORMAT) + "\n" + LOCATION,
//               imageUrl: new URL(`${baseUrl}preview_image.jpg?v=1`, window.location.origin).href,
//               link: {
//                 mobileWebUrl:
//                   window.location.protocol +
//                   "//" +
//                   window.location.host +
//                   baseUrl,
//                 webUrl:
//                   window.location.protocol +
//                   "//" +
//                   window.location.host +
//                   baseUrl,
//               },
//             },
//             buttons: [
//               {
//                 title: "초대장 보기",
//                 link: {
//                   mobileWebUrl:
//                     window.location.protocol +
//                     "//" +
//                     window.location.host +
//                     baseUrl,
//                   webUrl:
//                     window.location.protocol +
//                     "//" +
//                     window.location.host +
//                     baseUrl,
//                 },
//               },
//             ],
//           })
//         }}
//       >
//         <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
//       </button>
//     </LazyDiv>
//   )
// }
