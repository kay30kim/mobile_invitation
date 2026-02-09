import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"
import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { STATIC_ONLY } from "../../env"
import { Button } from "../button"
import { useModal } from "../modal"
import { useLanguage } from "../../context/LanguageContext"
import { TRANSLATIONS } from "../../const"

// ...existing code...
export const Information1 = () => {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language]
  return (
    <>
      <h2 className="english">Information</h2>
      <div className="info-card">
        <div className="label">{t.infoTitle}</div>

        <div className="content">
          <div className="transportation-list">
            <div className="transportation-item">
              <div className="transportation-title">{t.subway}</div>

              <div className="transportation-rows">
                <div className="transport-row">
                  {/* <span className="line line-7">⑦</span> */}
                  <div className="route-inline">
                    <span className="line-label line-7">{t.line7}</span>
                    <span className="station">{t.station1} <span className="exit">(4번출구)</span></span>
                    <span className="distance">{t.distance1}</span>
                  </div>
                </div>

                <div className="transport-row">
                  {/* <span className="line line-9">⑨</span> */}
                  <div className="route-inline">
                    <span className="line-label line-9">{t.line9}</span>
                    <span className="station">{t.station2} <span className="exit">(2번출구)</span></span>
                    <span className="distance">{t.distance2}</span>
                  </div>
                </div>
              </div>

              <div className="transportation-item bus">
                <div className="transportation-title2">{t.bus}</div>
                <div className="bus-row">
                  <div className="bus-lines">
                    <a className="bus-link" href="#">147, 241, 463, 3412, 4211</a><br />
                    <span className="station"> {t.station3} <span className="exit">(학동역 방면)</span></span>
                    <span className="distance-bus">{t.distance3}</span>
                  </div>
                  <div className="bus-lines">
                    <a className="bus-link" href="#">147, 463, 4211</a><br />
                    <span className="station"> {t.station4} <span className="exit">(맞은편)</span></span>
                    <span className="distance-bus">{t.distance4}</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export const Information2 = () => {
  const { openModal, closeModal } = useModal()

  return (
    <>
      <div className="info-card">
        <div className="label">마음 전하기</div>
        <div className="content">
          따로 계좌번호를 여쭤보시는 수고를
          <br />
          덜기 위해 계좌번호를 기재하였습니다.
          <br />
          부담 안가지셨으면 좋겠습니다.
        </div>

        <div className="break" />

        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              header: <div className="title">신랑측 계좌번호</div>,
              content: (
                <>
                  {GROOM_INFO.filter(({ account }) => !!account).map(
                    ({ relation, name, account }) => (
                      <div className="account-info" key={relation}>
                        <div>
                          <div className="name">
                            <span className="relation">{relation}</span> {name}
                          </div>
                          <div>{account}</div>
                        </div>
                        <Button
                          className="copy-button"
                          onClick={async () => {
                            if (account) {
                              try {
                                navigator.clipboard.writeText(account)
                                alert(account + "\n복사되었습니다.")
                              } catch {
                                alert("복사에 실패했습니다.")
                              }
                            }
                          }}
                        >
                          복사하기
                        </Button>
                      </div>
                    ),
                  )}
                </>
              ),
              footer: (
                <Button
                  buttonStyle="style2"
                  className="bg-light-grey-color text-dark-color"
                  onClick={closeModal}
                >
                  닫기
                </Button>
              ),
            })
          }}
        >
          신랑측 계좌번호 보기
        </Button>
        <div className="break" />
        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              header: <div className="title">신부측 계좌번호</div>,
              content: (
                <>
                  {BRIDE_INFO.filter(({ account }) => !!account).map(
                    ({ relation, name, account }) => (
                      <div className="account-info" key={relation}>
                        <div>
                          <div className="name">
                            <span className="relation">{relation}</span> {name}
                          </div>
                          <div>{account}</div>
                        </div>
                        <Button
                          className="copy-button"
                          onClick={async () => {
                            if (account) {
                              try {
                                navigator.clipboard.writeText(account)
                                alert(account + "\n복사되었습니다.")
                              } catch {
                                alert("복사에 실패했습니다.")
                              }
                            }
                          }}
                        >
                          복사하기
                        </Button>
                      </div>
                    ),
                  )}
                </>
              ),
              footer: (
                <Button
                  buttonStyle="style2"
                  className="bg-light-grey-color text-dark-color"
                  onClick={closeModal}
                >
                  닫기
                </Button>
              ),
            })
          }}
        >
          신부측 계좌번호 보기
        </Button>
      </div>
    </>
  )
}

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card information">
        <Information1 />
        <Information2 />
      </LazyDiv>
    </>
  )
}
