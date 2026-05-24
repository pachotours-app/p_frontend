import manifest from '@/Data/imageManifest.json';

/**
 * Responsive image. Given the original `src` (e.g. "/tours/sporadic.jpg"),
 * emits a <picture> with a WebP <source srcset> built from the widths the
 * optimizer generated (see scripts/optimize-images.mjs). If the image isn't
 * in the manifest yet, it degrades to a plain <img> on the original file.
 *
 * Run `pnpm optimize:images` to generate the WebP variants + manifest.
 */
const SOURCE_RE = /\.(jpe?g|png|webp)$/i;

export const Picture = ({
  src,
  alt = '',
  className,
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority,
  width,
  height,
}) => {
  const widths = manifest[src];
  const base = src.replace(SOURCE_RE, '');

  return (
    <picture>
      {widths?.length > 0 && (
        <source
          type="image/webp"
          sizes={sizes}
          srcSet={widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        fetchpriority={fetchPriority}
        decoding="async"
        width={width}
        height={height}
      />
    </picture>
  );
};
