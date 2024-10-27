'use client';
import { useEffect } from 'react';
import Header from './app/components/header';
import Footer from './app/components/footer';

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error, 'Error in global error');
  }, [error]);
  return (
    <html lang="no">
      <body>
        <Header />
        <h2>Noe gikk galt!</h2>
        <button onClick={() => reset()}>Prøv igjen</button>
        <Footer />
      </body>
    </html>
  );
}
