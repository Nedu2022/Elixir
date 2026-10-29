type Name =
  | "arrow"
  | "left"
  | "right"
  | "up"
  | "search"
  | "share"
  | "ruler"
  | "chair"
  | "hammer"
  | "bag"
  | "close";

const paths: Record<Name, React.ReactNode> = {
  arrow: <path d="M3 12h17m-5-5 5 5-5 5" />,
  left: <path d="m14 6-6 6 6 6" />,
  right: <path d="m10 6 6 6-6 6" />,
  up: <path d="m6 14 6-6 6 6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5" />
    </>
  ),
  share: (
    <>
      <circle cx="6" cy="6" r="2" fill="currentColor" />
      <circle cx="18" cy="12" r="2" fill="currentColor" />
      <circle cx="6" cy="19" r="2" fill="currentColor" />
      <path d="M7.5 7 16.5 11.2M16.5 12.8 7.5 18" />
    </>
  ),
  ruler: (
    <>
      <path d="M4 20V4l16 16H4Z" />
      <path d="M8 16v-4l4 4H8ZM4 8h2M4 12h2M4 16h1" />
    </>
  ),
  chair: (
    <>
      <rect x="7" y="3" width="10" height="9" rx="2" />
      <path d="M5 12h14M12 15v5M8 20h8M9 12v3h6v-3" />
    </>
  ),
  hammer: (
    <>
      <path d="m14 7 3-3 4 4-3 3" />
      <path d="M15 10 5 20l-2-2L13 8" />
      <path d="m12 5 3-2 2 2" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export default function Icon({ name, size = 20 }: { name: Name; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
