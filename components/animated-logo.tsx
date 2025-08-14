"use client"

interface AnimatedLogoProps {
  className?: string
  size?: number
}

export function AnimatedLogo({ className = "", size = 40 }: AnimatedLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <svg width={size} height={size} viewBox="0 0 40 40">
          {/* Water drop shape */}
          <path
            d="M20 5C20 5 10 15 10 25C10 30.5 14.5 35 20 35C25.5 35 30 30.5 30 25C30 15 20 5 20 5Z"
            fill="#03045e"
          />

          {/* Inner water ripple */}
          <circle cx="20" cy="25" r="6" fill="rgba(255,255,255,0.3)" />

          {/* Small bubbles */}
          <circle cx="16" cy="22" r="1.5" fill="rgba(255,255,255,0.6)" />
          <circle cx="24" cy="28" r="1" fill="rgba(255,255,255,0.6)" />
        </svg>
      </div>
      <span className="ml-2 font-bold text-2xl" style={{ color: "#03045e" }}>
        Aquaved
      </span>
    </div>
  )
}
