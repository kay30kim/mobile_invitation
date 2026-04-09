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
  const shareUrl = "https://kay30kim.github.io/mobile_invitation/"

  const handleKakaoShare = () => {
    if (!kakao) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("초대 링크가 클립보드에 복사되었습니다.\n카카오톡 앱을 열어 붙여넣기 해주세요.")
      }).catch(() => {
        alert("초대 링크: " + shareUrl)
      })
      return
    }

    try {
      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
          description: WEDDING_DATE.format(WEDDING_DATE_FORMAT) + "\n" + LOCATION,
          imageUrl: new URL(`${baseUrl}preview_image.jpg?v=1`, window.location.origin).href,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: "초대장 보기",
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
        installTalk: true,  // ← 카카오톡 미설치 시 설치 경로 이동
      })
    } catch (error) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("초대 링크가 클립보드에 복사되었습니다.\n카카오톡 앱을 열어 붙여넣기 해주세요.")
      }).catch(() => {
        alert("초대 링크: " + shareUrl)
      })
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