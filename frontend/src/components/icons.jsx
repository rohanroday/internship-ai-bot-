// Small stroke icon set (24x24), sized and coloured by CSS via currentColor.
const Svg = ({ children, size = 24, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
    {children}
  </svg>
);

export const BoxIcon = (p) => (
  <Svg {...p}><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" /><path d="m3 8 9 5 9-5" /><path d="M12 13v8" /></Svg>
);
export const TruckIcon = (p) => (
  <Svg {...p}><path d="M3 6h11v10H3z" /><path d="M14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></Svg>
);
export const AlertIcon = (p) => (
  <Svg {...p}><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4" /><path d="M12 17.2v.1" /></Svg>
);
export const ReturnIcon = (p) => (
  <Svg {...p}><path d="M9 14 4 9l5-5" /><path d="M4 9h11a5 5 0 0 1 0 10h-3" /></Svg>
);
export const WalletIcon = (p) => (
  <Svg {...p}><rect x="3" y="6" width="18" height="13" rx="2.5" /><path d="M3 10h18" /><path d="M16 15h2" /></Svg>
);
export const SparkIcon = (p) => (
  <Svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></Svg>
);
export const ChatIcon = (p) => (
  <Svg {...p}><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 10h8M8 13h5" /></Svg>
);
export const SearchIcon = (p) => (
  <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></Svg>
);
export const BookIcon = (p) => (
  <Svg {...p}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" /><path d="M4 19a2 2 0 0 1 2-2h13" /></Svg>
);
export const CheckIcon = (p) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></Svg>
);
export const PhoneIcon = (p) => (
  <Svg {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></Svg>
);
export const MailIcon = (p) => (
  <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>
);
export const ArrowIcon = (p) => (
  <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
export const ShieldIcon = (p) => (
  <Svg {...p}><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></Svg>
);
export const HomeIcon = (p) => (
  <Svg {...p}><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></Svg>
);
