type SvgProps = {
  className?: string;
  size?: number;
};

export function StarBurst({ className = "", size = 48 }: SvgProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path
        d="M32 4l5 18 18 5-18 5-5 18-5-18-18-5 18-5z"
        fill="#F4BD35"
        stroke="#17121D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Spiral({ className = "", size = 56 }: SvgProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path
        d="M40 40c0-12 10-20 20-16 12 4 14 22 2 30-10 7-26 4-32-8-6-12 2-28 16-30 16-2 30 12 28 28"
        fill="none"
        stroke="#F4BD35"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M40 40c0-12 10-20 20-16 12 4 14 22 2 30-10 7-26 4-32-8-6-12 2-28 16-30 16-2 30 12 28 28"
        fill="none"
        stroke="#17121D"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
        transform="translate(1 1)"
      />
    </svg>
  );
}

export function FireworkChakra({ className = "", size = 64 }: SvgProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <circle
        cx="40"
        cy="40"
        r="10"
        fill="#EC1678"
        stroke="#17121D"
        strokeWidth="3"
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 40 40)`}>
          <path
            d="M40 8c4 8 6 14 6 20 0 4-2 8-6 12-4-4-6-8-6-12 0-6 2-12 6-20z"
            fill="#FF6BB5"
            stroke="#17121D"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <circle cx="40" cy="40" r="5" fill="#F4BD35" stroke="#17121D" strokeWidth="2" />
    </svg>
  );
}

export function SparkLines({ className = "", size = 40 }: SvgProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path
        d="M24 4v12M24 32v12M4 24h12M32 24h12M10 10l8 8M30 30l8 8M38 10l-8 8M18 30l-8 8"
        stroke="#F28C28"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PetalCorner({ className = "", size = 70, flip = false }: SvgProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 90 90"
      width={size}
      height={size}
      className={className}
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M10 80c8-28 28-48 56-56 4 20-4 42-20 56-12 10-28 8-36 0z"
        fill="#EC1678"
        stroke="#17121D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M22 72c6-16 18-30 36-36"
        fill="none"
        stroke="#F5E5C3"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function TinyTrumpet({ className = "", size = 56 }: SvgProps) {
  return (
    <svg
      viewBox="0 0 90 50"
      width={size}
      height={size * 0.55}
      className={className}
      aria-hidden
    >
      <path
        d="M8 28h36c2 0 6-2 10-6l18-16v40L54 30c-4-4-8-6-10-6H8z"
        fill="#EC1678"
        stroke="#17121D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="22"
        width="10"
        height="12"
        rx="2"
        fill="#F4BD35"
        stroke="#17121D"
        strokeWidth="2.5"
      />
      <path
        d="M76 12c6 4 10 10 10 14s-4 10-10 14"
        fill="none"
        stroke="#F4BD35"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MiniElephant({ className = "", size = 70 }: SvgProps) {
  return (
    <svg
      viewBox="0 0 100 80"
      width={size}
      height={size * 0.8}
      className={className}
      aria-hidden
    >
      <ellipse
        cx="48"
        cy="48"
        rx="30"
        ry="22"
        fill="#6B3FA0"
        stroke="#17121D"
        strokeWidth="3"
      />
      <circle
        cx="72"
        cy="34"
        r="16"
        fill="#6B3FA0"
        stroke="#17121D"
        strokeWidth="3"
      />
      <path
        d="M78 42c6 8 8 18 4 24"
        fill="none"
        stroke="#6B3FA0"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M78 42c6 8 8 18 4 24"
        fill="none"
        stroke="#17121D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M28 34c-2-10 4-18 14-16"
        fill="none"
        stroke="#6B3FA0"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M28 34c-2-10 4-18 14-16"
        fill="none"
        stroke="#17121D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 38h32c2 0 4 2 4 5v6H28v-6c0-3 2-5 4-5z"
        fill="#EC1678"
        stroke="#17121D"
        strokeWidth="2.5"
      />
      <circle cx="78" cy="30" r="2.5" fill="#17121D" />
      <rect x="34" y="64" width="8" height="12" rx="2" fill="#4A2A78" stroke="#17121D" strokeWidth="2" />
      <rect x="52" y="64" width="8" height="12" rx="2" fill="#4A2A78" stroke="#17121D" strokeWidth="2" />
    </svg>
  );
}

export function HandsWithSparks({ className = "", size = 140 }: SvgProps) {
  return (
    <svg
      viewBox="0 0 160 140"
      width={size}
      height={size * 0.875}
      className={className}
      aria-hidden
    >
      <path
        d="M20 20h120v90c0 8-20 18-60 18S20 118 20 110V20z"
        fill="#C0392B"
        stroke="#17121D"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M32 20v86c0 6 14 12 48 12s48-6 48-12V20"
        fill="none"
        stroke="#F4BD35"
        strokeWidth="3"
        opacity="0.7"
      />
      <path
        d="M48 118c-4 6-2 14 6 16 6 2 14-4 12-12"
        fill="#E8B89A"
        stroke="#17121D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M112 118c4 6 2 14-6 16-6 2-14-4-12-12"
        fill="#E8B89A"
        stroke="#17121D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g>
        <path
          d="M58 78l-4 28h14l-2-28z"
          fill="#E8B89A"
          stroke="#17121D"
          strokeWidth="2.5"
        />
        <path
          d="M74 72l-2 34h14l-2-34z"
          fill="#E8B89A"
          stroke="#17121D"
          strokeWidth="2.5"
        />
        <path
          d="M90 78l2 28h14l-4-28z"
          fill="#E8B89A"
          stroke="#17121D"
          strokeWidth="2.5"
        />
      </g>
      {[
        [52, 48],
        [80, 36],
        [108, 50],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path
            d="M0-16l3 10 10 3-10 3-3 10-3-10-10-3 10-3z"
            fill="#F4BD35"
            stroke="#17121D"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );
}

export function CobraSilhouette({
  className = "",
  size = 90,
  flip = false,
}: SvgProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 70 120"
      width={size * 0.58}
      height={size}
      className={className}
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M35 110c-8-20-18-36-18-54 0-22 12-40 28-40 4 0 8 2 10 6 4 8-2 16-10 18-6 2-12-2-14-8-1-3 1-8 6-8 8 0 14 10 14 22 0 18-8 34-16 64z"
        fill="#6B3FA0"
        stroke="#17121D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse
        cx="42"
        cy="28"
        rx="18"
        ry="22"
        fill="#8E4EC6"
        stroke="#17121D"
        strokeWidth="3"
      />
      <circle cx="36" cy="24" r="3" fill="#EC1678" stroke="#17121D" strokeWidth="1.5" />
      <circle cx="48" cy="24" r="3" fill="#EC1678" stroke="#17121D" strokeWidth="1.5" />
      <path
        d="M34 40c4 4 12 4 16 0"
        fill="none"
        stroke="#F4BD35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 50c6 2 14 2 20 0M26 62c8 3 18 3 26 0M28 74c6 2 14 2 20 0"
        fill="none"
        stroke="#EC1678"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
