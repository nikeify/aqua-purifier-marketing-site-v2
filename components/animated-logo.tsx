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
          <defs>
            {/* Main water drop gradient - chrome/metallic effect */}
            <linearGradient id="waterDropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a90e2" />
              <stop offset="25%" stopColor="#357abd" />
              <stop offset="50%" stopColor="#03045e" />
              <stop offset="75%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Inner highlight gradient */}
            <radialGradient id="innerHighlight" cx="30%" cy="30%" r="60%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="40%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </radialGradient>

            {/* Reflection gradient */}
            <linearGradient id="reflection" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>

            {/* Drop shadow filter */}
            <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.3)" />
            </filter>

            {/* Inner shadow filter */}
            <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feOffset dx="0" dy="2" />
              <feGaussianBlur stdDeviation="2" result="offset-blur" />
              <feFlood floodColor="rgba(0,0,0,0.4)" />
              <feComposite in2="offset-blur" operator="in" />
            </filter>
          </defs>

          {/* Main water drop with 3D effect */}
          <path
            d="M20 5C20 5 10 15 10 25C10 30.5 14.5 35 20 35C25.5 35 30 30.5 30 25C30 15 20 5 20 5Z"
            fill="url(#waterDropGradient)"
            filter="url(#dropShadow)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.5"
          />

          {/* Inner highlight for 3D depth */}
          <path
            d="M20 7C20 7 12 16 12 24C12 28.5 15.5 32 20 32C24.5 32 28 28.5 28 24C28 16 20 7 20 7Z"
            fill="url(#innerHighlight)"
          />

          {/* Realistic reflection on the surface */}
          <ellipse cx="17" cy="18" rx="4" ry="8" fill="url(#reflection)" transform="rotate(-15 17 18)" opacity="0.7" />

          {/* Smaller curved reflection */}
          <ellipse cx="15" cy="15" rx="2" ry="4" fill="rgba(255,255,255,0.5)" transform="rotate(-20 15 15)" />

          {/* Realistic water bubbles with depth */}
          <circle cx="16" cy="22" r="1.5" fill="rgba(255,255,255,0.8)" filter="url(#dropShadow)" />
          <circle cx="16" cy="22" r="0.8" fill="rgba(255,255,255,0.4)" />

          <circle cx="24" cy="28" r="1" fill="rgba(255,255,255,0.7)" filter="url(#dropShadow)" />
          <circle cx="24" cy="28" r="0.5" fill="rgba(255,255,255,0.3)" />

          {/* Bottom reflection/base shadow */}
          <ellipse cx="20" cy="34" rx="8" ry="2" fill="rgba(0,0,0,0.1)" opacity="0.6" />
        </svg>
      </div>
      <span
        className="ml-2 font-bold text-2xl"
        style={{
          color: "#03045e",
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        Aquaved
      </span>
    </div>
  )
}
