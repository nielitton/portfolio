"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  speed: number
  directionX: number
  directionY: number
  size: number
  color: string
  update: (canvasWidth: number, canvasHeight: number) => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Particle class
    class ParticleClass implements Particle {
      x: number
      y: number
      speed: number
      directionX: number
      directionY: number
      size: number
      color: string

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.speed = 0.2
        this.directionX = Math.random() * 2 - 1
        this.directionY = Math.random() * 2 - 1
        this.size = Math.random() * 2
        this.color = Math.random() > 0.9 ? "#ff8c00" : "#3c3c3c"
      }

      update(canvasWidth: number, canvasHeight: number) {
        if (this.x > canvasWidth || this.x < 0) {
          this.directionX = -this.directionX
        }
        if (this.y > canvasHeight || this.y < 0) {
          this.directionY = -this.directionY
        }

        this.x += this.directionX * this.speed
        this.y += this.directionY * this.speed
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = 10
    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleClass(canvas.width, canvas.height))
    }

    // Animation
    function animate() {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "#1a1a1a"
      ctx.lineWidth = 0.5
      const gridSize = 30

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height)
        particle.draw(ctx)

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 140, 0, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="bg-[#131417]" />
      <div
        className="absolute inset-0"
        style={{
          pointerEvents: "none",
        }}
      />
    </div>
  )
}

