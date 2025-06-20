import { useEffect, useRef } from "react"
import VanillaTilt from "vanilla-tilt"

const NeonModal = ({ children, className = "" }) => {
  const tiltRef = useRef()

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 12,
      speed: 400,
      glare: true,
      "max-glare": 0.25,
    })
  }, [])

  return (
    <div
      ref={tiltRef}
      className={`p-6 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-[0_0_25px_rgba(0,255,255,0.2)] text-white ${className}`}
    >
      {children}
    </div>
  )
}

export default NeonModal
