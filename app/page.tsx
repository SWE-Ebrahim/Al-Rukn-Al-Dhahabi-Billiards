import { redirect } from 'next/navigation';

// When the user hits the bare "/" root, immediately redirect to /en.
// The middleware below will override this for Arabic-speaking browsers.
export default function RootPage() {
  redirect('/en');
}
