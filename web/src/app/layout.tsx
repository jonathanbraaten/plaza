import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
      <body>{children}</body>
    </html>
  );
}
