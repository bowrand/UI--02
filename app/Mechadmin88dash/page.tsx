import { redirect } from 'next/navigation';

export default function AdminRoot() {
  // Middleware handles the actual redirect; this is a fallback
  redirect('/Mechadmin88dash/login');
}
