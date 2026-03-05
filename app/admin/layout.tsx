// This layout wraps the /admin redirect page — minimal shell, fully blocked by middleware.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
