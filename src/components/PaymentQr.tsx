"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { PAYMENT, buildUpiUri } from "@/lib/messages";

type PaymentQrProps = {
  size?: number;
  /** Compact label styling for the cream ticket panel */
  light?: boolean;
  showLabel?: boolean;
};

export function PaymentQr({
  size = 148,
  light = true,
  showLabel = true,
}: PaymentQrProps) {
  const upiUri = buildUpiUri();
  const [imageFailed, setImageFailed] = useState(false);
  const useImage = !upiUri && !imageFailed;

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="overflow-hidden rounded-md border-[3px] border-ink bg-white p-2"
        style={{
          width: size + 16,
          height: size + 16,
          boxShadow: "3px 3px 0 #17121D",
        }}
      >
        {upiUri ? (
          <QRCodeSVG
            value={upiUri}
            size={size}
            level="M"
            bgColor="#FFFFFF"
            fgColor="#17121D"
            marginSize={1}
            title="UPI payment QR code"
          />
        ) : useImage ? (
          <Image
            src="/payment-qr.png"
            alt="UPI payment QR code"
            width={size}
            height={size}
            className="h-full w-full object-contain"
            onError={() => setImageFailed(true)}
            unoptimized
            priority
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-1 px-2 text-center"
            style={{ width: size, height: size }}
          >
            <p className="font-display text-sm tracking-wide text-ink">QR</p>
            <p className="font-body text-[0.65rem] leading-snug text-ink/70">
              Drop <span className="font-semibold">payment-qr.png</span> in{" "}
              <span className="font-semibold">public/</span>
            </p>
          </div>
        )}
      </div>
      {showLabel && (
        <>
          <p
            className={`text-center font-body text-[0.65rem] font-bold uppercase tracking-[0.16em] sm:text-xs ${
              light ? "text-ink/75" : "text-cream/75"
            }`}
          >
            {PAYMENT.label}
          </p>
          {PAYMENT.upiId ? (
            <p
              className={`font-body text-xs ${
                light ? "text-ink/80" : "text-mustard"
              }`}
            >
              {PAYMENT.upiId}
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}
