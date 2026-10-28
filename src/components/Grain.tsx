export function Grain({ light = false }: { light?: boolean }) {
  return <div className={`grain ${light ? "grain-light" : ""}`} aria-hidden />;
}
