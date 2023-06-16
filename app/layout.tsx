import './globals.scss';
import '../sass/base.scss';

export const metadata = {
  title: 'Chat GPT Clone',
  description: 'Chat GPT Clone for learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
