import { useEffect, useRef } from "react"
import patelUrl from "../../icons/petal.png"

const X_SPEED = 0.4
const X_SPEED_VARIANCE = 0.2

const Y_SPEED = 0.2
const Y_SPEED_VARIANCE = 0.1

const FLIP_SPEED_VARIANCE = 0.02

// Petal class
class Petal {
  x: number
  y: number
  w: number = 0
  h: number = 0
  opacity: number = 0
  flip: number = 0
  xSpeed: number = 0
  ySpeed: number = 0
  flipSpeed: number = 0

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
    private petalImg: HTMLCanvasElement | HTMLImageElement,
  ) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height * 2 - canvas.height

    this.initialize()
  }

  initialize() {
    this.w = 25 + Math.random() * 15
    this.h = 20 + Math.random() * 10
    this.opacity = this.w / 80
    this.flip = Math.random()

    this.xSpeed = X_SPEED + Math.random() * X_SPEED_VARIANCE
    this.ySpeed = Y_SPEED + Math.random() * Y_SPEED_VARIANCE
    this.flipSpeed = Math.random() * FLIP_SPEED_VARIANCE
  }

  draw() {
    if (this.y > this.canvas.height || this.x > this.canvas.width) {
      this.initialize()

      const rand = Math.random() * (this.canvas.width + this.canvas.height)
      if (rand > this.canvas.width) {
        this.x = 0
        this.y = rand - this.canvas.width
      } else {
        this.x = rand
        this.y = 0
      }
    }
    this.ctx.globalAlpha = this.opacity
    this.ctx.drawImage(
      this.petalImg,
      this.x,
      this.y,
      this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
      this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5),
    )
  }

  animate() {
    this.x += this.xSpeed
    this.y += this.ySpeed
    this.flip += this.flipSpeed
    this.draw()
  }
}

export const BGEffect = () => {
  const ref = useRef<HTMLCanvasElement>({} as HTMLCanvasElement)

  const petalsRef = useRef<Petal[]>([])

  const resizeTimeoutRef = useRef(0)
  const animationFrameIdRef = useRef(0)

  useEffect(() => {
    const canvas = ref.current

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

    const petalImg = new Image()
    petalImg.src = patelUrl

    petalImg.onload = () => {
      // 🌿 STEP 2: 오프스크린 캔버스 생성 + 필터 적용해 초록 PNG 제작
      const off = document.createElement("canvas")
      off.width = petalImg.width
      off.height = petalImg.height
      const offCtx = off.getContext("2d") as CanvasRenderingContext2D

      // 원하는 색상으로 바꾸는 필터 (연초록 톤)
      // offCtx.filter = "hue-rotate(150deg) saturate(220%) brightness(1.0)"
      offCtx.drawImage(petalImg, 0, 0)

      // STEP 3: 처리된 이미지를 사용해서 Petal 생성
      initializePetals(off)
      render() 
    }

    const getPetalNum = () => {
      return Math.floor((window.innerWidth * window.innerHeight) / 30000)
    }

    const initializePetals = (processedImg: HTMLCanvasElement) => {
      const count = getPetalNum()
      const petals = []
      for (let i = 0; i < count; i++) {
        petals.push(new Petal(canvas, ctx, processedImg))  // ← ✔ 초록 이미지 전달
      }
      petalsRef.current = petals
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      petalsRef.current.forEach((petal) => petal.animate())
      animationFrameIdRef.current = requestAnimationFrame(render)
    }

    render()

    const onResize = () => {
      clearTimeout(resizeTimeoutRef.current)
      resizeTimeoutRef.current = window.setTimeout(() => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const newPetalNum = getPetalNum()
        if (newPetalNum > petalsRef.current.length) {
          for (let i = petalsRef.current.length; i < newPetalNum; i++) {
            petalsRef.current.push(new Petal(canvas, ctx, petalImg))
          }
        } else if (newPetalNum < petalsRef.current.length) {
          petalsRef.current.splice(newPetalNum)
        }
      }, 100)
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(animationFrameIdRef.current)
    }
  }, [])

  return (
    <div className="bg-effect">
      <canvas ref={ref} />
    </div>
  )
}
