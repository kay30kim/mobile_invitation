/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useEffect } from "react"
import { StoreContext } from "./context"
import { KAKAO_SDK_JS_KEY, NAVER_MAP_CLIENT_ID } from "../../env"

const baseUrl = import.meta.env.BASE_URL

const NAVER_MAP_URL = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAP_CLIENT_ID}`
const KAKAO_SDK_URL = `https://developers.kakao.com/sdk/js/kakao.min.js`

export const useNaver = () => {
  const { naver, setNaver } = useContext(StoreContext)
  useEffect(() => {
    if (!NAVER_MAP_CLIENT_ID) {
      return
    }

    if (!document.querySelector(`script[src="${NAVER_MAP_URL}"]`)) {
      const script = document.createElement("script")
      script.src = NAVER_MAP_URL
      document.head.appendChild(script)
      script.addEventListener("load", () => {
        setNaver((window as any).naver)
      })
    }
  }, [setNaver])

  return naver
}

export const useKakao = () => {
  const { kakao, setKakao } = useContext(StoreContext)
  useEffect(() => {
    if (!KAKAO_SDK_JS_KEY) {
      console.warn("KAKAO_SDK_JS_KEY is not set")
      return
    }

    if ((window as any).Kakao?.isInitialized?.()) {
      setKakao((window as any).Kakao)
      return
    }

    if (!document.querySelector(`script[src="${KAKAO_SDK_URL}"]`)) {
      const script = document.createElement("script")
      script.src = KAKAO_SDK_URL
      script.async = true
      script.addEventListener("load", () => {
        if ((window as any).Kakao) {
          if (!(window as any).Kakao.isInitialized()) {
            ;(window as any).Kakao.init(KAKAO_SDK_JS_KEY)
          }
          setKakao((window as any).Kakao)
          console.log("Kakao SDK initialized")
        }
      })
      script.addEventListener("error", () => {
        console.error("Failed to load Kakao SDK")
      })
      document.head.appendChild(script)
    }
  }, [setKakao])

  return kakao
}
