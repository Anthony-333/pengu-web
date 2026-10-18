/**
 * Stand-in for `next/image` when the phone screens are rendered for video
 * (esbuild aliases it in `npm run screens`). Images resolve to `assets/`,
 * where render-screens.tsx copies them, relative to the video/ project root.
 */
type Props = { src: string | { src: string }; alt: string; fill?: boolean; className?: string };

export const assetName = (src: Props["src"]) => (typeof src === "string" ? src : src.src).split("/").pop()!;

export default function Image({ src, alt, fill, className = "" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`assets/${assetName(src)}`} alt={alt} className={`${fill ? "absolute inset-0 h-full w-full" : ""} ${className}`} />
  );
}
