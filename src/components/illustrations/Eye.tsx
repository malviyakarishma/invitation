"use client";

import { useState } from "react";

type EyeProps = {
  className?: string;
  size?: number;
};

export function Eye({ className = "", size = 88 }: EyeProps) {
  const [wink, setWink] = useState(false);

  return (
    <button
      type="button"
      className={`focus-ring touch-target tap-bounce inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-2 ${className}`}
      style={{
        minWidth: Math.max(44, size),
        minHeight: Math.max(44, size * 0.7),
      }}
      aria-label="A curious eye — tap to wink"
      onClick={(e) => {
        e.stopPropagation();
        setWink(true);
        window.setTimeout(() => setWink(false), 450);
      }}
    >
      <svg
        viewBox="0 0 120 84"
        width={size}
        height={size * 0.7}
        aria-hidden
        className="overflow-visible"
      >
        <ellipse
          cx="60"
          cy="46"
          rx="52"
          ry="30"
          fill="#F5E5C3"
          stroke="#17121D"
          strokeWidth="4"
        />
        <path
          d="M14 40c10-22 36-34 46-34s36 12 46 34"
          fill="#EC1678"
          stroke="#17121D"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M22 28c6-4 14-8 20-6M42 20c6-3 12-4 18-2M68 18c8 0 16 3 22 8"
          fill="none"
          stroke="#17121D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {!wink ? (
          <>
            <circle
              cx="60"
              cy="48"
              r="22"
              fill="#08A6B5"
              stroke="#17121D"
              strokeWidth="3.5"
            />
            <circle cx="60" cy="48" r="12" fill="#17121D" />
            <circle cx="54" cy="42" r="4.5" fill="#F5E5C3" />
          </>
        ) : (
          <path
            d="M28 50c10 10 28 14 32 14s22-4 32-14"
            fill="none"
            stroke="#17121D"
            strokeWidth="5"
            strokeLinecap="round"
          />
        )}
      </svg>
    </button>
  );
}
