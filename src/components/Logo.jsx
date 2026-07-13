import { company } from '../data/company'

/**
 * Brand logo — always uses the official SVG in company.logo.primary.
 * size: height in pixels (width scales with the wide SVG aspect ratio).
 */
export default function Logo({
  className = '',
  height = 40,
  alt = `${company.legalName} logo`,
  decorative = false,
}) {
  // SVG intrinsic ratio ≈ 2390 / 1792
  const aspect = 2390 / 1792
  const width = Math.round(height * aspect)

  return (
    <img
      src={company.logo.primary}
      alt={decorative ? '' : alt}
      className={`block h-auto max-w-full object-contain object-left ${className}`}
      style={{ height, width }}
      width={width}
      height={height}
      decoding="async"
    />
  )
}
