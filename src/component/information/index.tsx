import { BRIDE_INFO, GROOM_INFO, TRANSLATIONS } from "../../const"
import { STATIC_ONLY } from "../../env"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import { AttendanceInfo } from "./attendance"
import { useLanguage } from "../../context/LanguageContext"

export const Information1 = () => {

  const { language } = useLanguage()
  const t = TRANSLATIONS[language]

  return (
    <>
      <h2 className="english">{t.information}</h2>

      <div className="info-card">
        <div className="label">{t.mealGuide}</div>

        <div className="content">
          {t.mealTime}
          <br />
          {t.mealLocation}
        </div>
      </div>
    </>
  )
}

export const Information2 = () => {

  const { openModal, closeModal } = useModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language]

  return (
    <>
      <div className="info-card">

        <div className="label">{t.donation}</div>

        <div className="content">
          {t.donationLine1}
          <br />
          {t.donationLine2}
          <br />
          {t.donationLine3}
        </div>

        <div className="break" />

        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              header: <div className="title">{t.groomAccountTitle}</div>,
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
                                alert(account + "\n" + t.copied)
                              } catch {
                                alert(t.copyFail)
                              }
                            }
                          }}
                        >
                          {t.copy}
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
                  {t.close}
                </Button>
              ),
            })
          }}
        >
          {t.groomAccountButton}
        </Button>

        <div className="break" />

        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              header: <div className="title">{t.brideAccountTitle}</div>,
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
                                alert(account + "\n" + t.copied)
                              } catch {
                                alert(t.copyFail)
                              }
                            }
                          }}
                        >
                          {t.copy}
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
                  {t.close}
                </Button>
              ),
            })
          }}
        >
          {t.brideAccountButton}
        </Button>

      </div>
    </>
  )
}

export const Information = () => {
  if (STATIC_ONLY) {
    return (
      <>
        <LazyDiv className="card information">
          <Information1 />
        </LazyDiv>

        <LazyDiv className="card information">
          <Information2 />
        </LazyDiv>
      </>
    )
  }

  return (
    <LazyDiv className="card information">
      <Information1 />
      <Information2 />
      <AttendanceInfo />
    </LazyDiv>
  )
}
