import Image from "next/image";

/**
 * Unified image component — ready for Sanity CMS.
 *
 * Handles three states:
 *   1. Sanity image reference → resolves URL via @sanity/image-url (future)
 *   2. Static src string     → renders next/image directly
 *   3. No image at all       → shows accessible placeholder
 *
 * When Sanity is connected, uncomment the urlForImage import and
 * the resolution line below. No other changes needed.
 */
export default function SanityImage({
  image = null,
  src = null,
  alt = "Image coming soon",
  width = 400,
  height = 400,
  className = "",
  priority = false,
  sizes,
}) {
  // ── Future: resolve Sanity image reference to a CDN URL ──
  // import { urlForImage } from "@/lib/sanity";
  // const resolvedSrc = image?.asset
  //   ? urlForImage(image).width(width).height(height).url()
  //   : src;
  const resolvedSrc = src;

  if (resolvedSrc) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      style={{ aspectRatio: `${width} / ${height}` }}
      className={`bg-gray-100 rounded-lg flex items-center justify-center ${className}`}
    >
      <svg
        className="w-16 h-16 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
}
