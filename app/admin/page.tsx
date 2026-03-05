import { redirect } from 'next/navigation';

// Old admin route — permanently blocked. All access redirects to login.
export const metadata = { robots: 'noindex, nofollow' };

export default function AdminPage() {
  redirect('/Mechadmin88dash/login');
}
