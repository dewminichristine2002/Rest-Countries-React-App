import { useEffect, useRef } from "react"
import VanillaTilt from "vanilla-tilt"

const NeonButton = ({ children, onClick, className = "" }) => {
  const tiltRef = useRef()

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 300,
      glare: true,
      "max-glare": 0.2,
      scale: 1.05,
    })
  }, [])

  return (
    <button
      ref={tiltRef}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg bg-[#0f172a] text-white border border-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:bg-[#112240] transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

export default NeonButton
