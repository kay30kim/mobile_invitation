import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"
import { link } from "fs"
import { stat } from "fs"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-05-30 14:00", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [15]

export const LOCATION = "서울 강남 엘리에나 호텔"
export const LOCATION_ADDRESS = "서울 강남구 논현로 645 엘리에나호텔\n2층 컨벤션홀"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [127.031412583833, 37.5111132057189]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 1354448162

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 1447239442

export const BRIDE_FULLNAME = "김채희"
export const BRIDE_FIRSTNAME = "채희"
export const BRIDE_TITLE = "차녀"
export const BRIDE_FATHER = "김대성"
export const BRIDE_MOTHER = "정세미"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-7623-6588",
    account: "우리은행 1002-448-151954",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-3717-0080",
    account: "하나은행 101-892075-33907",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-3717-5160",
    account: "우리은행 168-08-018351",
  },
]

export const TRANSLATIONS = {
  ko: {
    invitation: "축하의 마음으로 참석해주시는 모든 분들을 귀하게 모실 수 있도록",
    attendanceTitle: "참석 의사 전달",
    contactTitle: "축하 인사 전하기",
    contactSubtitle: "전화, 문자메세지로 축하 인사를 전해보세요.",
    dateText: "2026년 5월 30일 2시",
    locationText: "서울 강남 엘리에나 호텔 2층 컨벤션홀",
    infoTitle: "교통 안내",
    subway: "지하철 이용시",
    bus: "버스 이용시",
    line7:"7호선",
    line9:"9호선",

    donation: "마음 전하기",
    groomAccount: "신랑측 계좌번호 보기",
    brideAccount: "신부측 계좌번호 보기",
    copy: "복사하기",
    close: "닫기",

    station1: "학동역",
    station2: "언주역",
    station3: "논현동고개(23-119) 하차",
    station4: "논현고개(23-146) 하차",
    distance1: "도보 5분",
    distance2: "도보 7분",
    information: "Information",

    mealGuide: "식사 안내",
    mealTime: "식사시간: 12시 30분 ~ 14시 30분",
    mealLocation: "장소: 지하 1층 연회장",

    donationLine1: "참석이 어려워 직접 축하해주지 못하는",
    donationLine2: "분들을 위해 계좌번호를 기재하였습니다.",
    donationLine3: "넓은 마음으로 양해 부탁드립니다.",

    groomAccountTitle: "신랑측 계좌번호",
    brideAccountTitle: "신부측 계좌번호",

    groomAccountButton: "신랑측 계좌번호 보기",
    brideAccountButton: "신부측 계좌번호 보기",

    copied: "복사되었습니다.",
    copyFail: "복사에 실패했습니다.",
  },
  en: {
    invitation: "We would like to welcome all those who celebrate with us",
    attendanceTitle: "Attendance",
    contactTitle: "Send Congratulations",
    contactSubtitle: "Share your congratulations via phone or message.",
    dateText: "May 30, 2026 2 PM",
    locationText: "Eliena Hotel, Gangnam, Seoul (2F Convention Hall)",
    infoTitle: "Transportation",
    subway: "Subway",
    bus: "Bus",
    line7:"Line 7",
    line9:"Line 9",

    donation: "Gift Information",
    groomAccount: "View Groom Account",
    brideAccount: "View Bride Account",
    copy: "Copy",
    close: "Close",

    station1: "Hakdong Station",
    station2: "Eonju Station",
    station3: "Get off at Nonhyeon-donggogae (23-119)",
    station4: "Get off at Nonhyeongogae (23-146)",
    distance1: "5 min walk",
    distance2: "7 min walk",
    distance3: "2 min walk",
    distance4: "2 min walk",

    information: "Information",

    mealGuide: "Meal Information",
    mealTime: "Meal Time: 12:30 PM ~ 2:30 PM",
    mealLocation: "Location: B1 Banquet Hall",

    donationLine1: "For guests who are unable to attend in person,",
    donationLine2: "we have provided account details below.",
    donationLine3: "Thank you for your kind understanding.",

    groomAccountTitle: "Groom's Side Account",
    brideAccountTitle: "Bride's Side Account",

    groomAccountButton: "View Groom Account",
    brideAccountButton: "View Bride Account",

    copied: "Copied.",
    copyFail: "Copy failed.",
  },
}
export const GROOM_FULLNAME = "김경호"
export const GROOM_FIRSTNAME = "경호"
export const GROOM_TITLE = "차남"
export const GROOM_FATHER = "김기태"
export const GROOM_MOTHER = "김신자"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-8965-3592",
    account: "국민은행 444402-01-330261",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-5774-5930",
    account: "국민은행 535902-95-138306",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-9190-3592",
    account: "SC제일 491-20-042913",
  },
]
