// HeroVisual：统一图片展示
// mode="img" 使用 <img>；mode="bg" 使用背景图（适合圆形 cover）
export default function HeroVisual({ src, alt, className = "", mode = "img" }) {
  if (mode === "bg") {
    return (
      <div
        className={`visual ${className}`.trim()}
        role="img"
        aria-label={alt}
        style={{ backgroundImage: `url(${src})` }}
      />
    );
  }

  return (
    <div className={`visual ${className}`.trim()}>
      <img className="visual__img" src={src} alt={alt} loading="lazy" />
    </div>
  );
}
