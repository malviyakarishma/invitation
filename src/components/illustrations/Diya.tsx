"use client";

type DiyaProps = {
  className?: string;
  size?: number;
  interactive?: boolean;
  onBurst?: () => void;
};

function DiyaSvg({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 80 92"
      width={size}
      height={size * 1.15}
      aria-hidden
      className="overflow-visible"
    >
      <ellipse cx="40" cy="78" rx="28" ry="8" fill="#17121D" opacity="0.25" />
      <path
        d="M12 58c0 14 12.5 24 28 24s28-10 28-24c0-6-4-10-10-12H22c-6 2-10 6-10 12z"
        fill="#C0392B"
        stroke="#17121D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse
        cx="40"
        cy="48"
        rx="30"
        ry="10"
        fill="#E74C3C"
        stroke="#17121D"
        strokeWidth="3"
      />
      <ellipse cx="40" cy="46" rx="18" ry="5" fill="#8B1E1E" opacity="0.55" />
      <g className="animate-flicker origin-[40px_40px]">
        <path
          d="M40 42c2-8 10-14 10-22 0 0-8 2-10 8-2-6-10-8-10-8 0 8 8 14 10 22z"
          fill="#F4BD35"
          stroke="#17121D"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M40 44c1-5 5-9 5-14 0 0-4 1-5 5-1-4-5-5-5-5 0 5 4 9 5 14z"
          fill="#F28C28"
        />
        <ellipse cx="40" cy="30" rx="2.5" ry="4" fill="#F5E5C3" opacity="0.9" />
      </g>
    </svg>
  );
}

export function Diya({
  className = "",
  size = 72,
  interactive = false,
  onBurst,
}: DiyaProps) {
  if (!interactive) {
    return (
      <span
        className={`relative inline-flex items-center justify-center ${className}`}
        style={{ width: size, height: size * 1.15 }}
        aria-hidden
      >
        <DiyaSvg size={size} />
      </span>
    );
  }

  return (
    <button
      type="button"
      className={`focus-ring touch-target tap-bounce relative inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-2 ${className}`}
      style={{ minWidth: Math.max(44, size + 8), minHeight: Math.max(44, size * 1.15 + 8) }}
      aria-label="Light the diya"
      onClick={(e) => {
        e.stopPropagation();
        onBurst?.();
      }}
    >
      <DiyaSvg size={size} />
    </button>
  );
}
