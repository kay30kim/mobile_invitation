import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"
import { useLanguage } from "../../context/LanguageContext"
import { TRANSLATIONS } from "../../const"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  const { language } = useLanguage()

  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>

      <div className="break" />

      <div className="content">{language === "ko" ? "2018년 봄," : "In spring 2018,"}</div>
      <div className="content">{language === "ko" ? "20대의 청춘 속에서 만난 두 사람이" : "Two people met in their youth"}</div>
      <div className="content">{language === "ko" ? "오랜 시간 서로의 곁을 지켜오며" : "and have supported each other"}</div>
      <div className="break" />
      <div className="content">{language === "ko" ? "2026년, 그 시절의 마음으로" : "In 2026, with the heart of that time"}</div>
      <div className="content">{language === "ko" ? "부부의 길을" : "We will walk the path of marriage"}</div>
      <div className="content">{language === "ko" ? "함께 걷고자 합니다." : "together."}</div>
      <div className="break" />
      <div className="content">{language === "ko" ? "저희의 새로운 시작에" : "We would be grateful if you would"}</div>
      <div className="content">{language === "ko" ? "함께해 주시면 감사하겠습니다." : "join us at our new beginning."}</div>
      <div className="break" />
      <div className="name">
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM_FULLNAME}
      </div>
      <div className="name">
        {BRIDE_FATHER} · {BRIDE_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{BRIDE_TITLE}</span>
        </span>{" "}
        {BRIDE_FULLNAME}
      </div>

      <div className="break" />

      <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">{TRANSLATIONS[language].contactTitle}</div>
                <div className="subtitle">{TRANSLATIONS[language].contactSubtitle}</div>
              </div>
            ),
            content: (
              <>
                <div className="contact-info">
                  {GROOM_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
                <div className="contact-info">
                  {BRIDE_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                {language === "ko" ? "닫기" : "Close"}
              </Button>
            ),
          })
        }}
      >
        연락하기
      </Button>
    </LazyDiv>
  )
}
