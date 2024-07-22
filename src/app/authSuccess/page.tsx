'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Loading from './_components/loading';

export default function Page() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const codeParam = searchParams.get('code');
    setCode(codeParam);
  }, [searchParams]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-mono">Successfully logged in with eBay</h1>
      {code ? (
        <code className="block mt-5 text-2xl bg-gray-200 rounded-md p-2">{code}</code>
      ) : (
        <Loading />
      )}
    </main>
  );
}

