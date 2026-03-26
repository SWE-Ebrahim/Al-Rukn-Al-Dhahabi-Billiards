import './globals.css';

/* =========================
   ROOT LAYOUT - PASSTHROUGH ONLY
   The actual HTML structure is in [locale]/layout.tsx
   ========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}