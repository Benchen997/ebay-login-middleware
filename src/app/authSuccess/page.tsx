'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Loading from './_components/loading';

const AuthSuccess = () => {
  const [code, setCode] = useState<string | null>(null);
  const [expireIn, setExpireIn] = useState<number | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const codeParam = searchParams.get('code');
    const expireInParam = searchParams.get('expires_in');
    setCode(codeParam);
    setExpireIn(Number(expireInParam));

    if (codeParam && expireInParam) {
      // Send code and expireIn to server
      fetch('http://localhost:3000/auth/success', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: codeParam,
          expires_in: Number(expireInParam),
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, [searchParams]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-mono">Successfully logged in with eBay</h1>
      <Suspense fallback={<Loading />}>
        <code className="block mt-3 text-2xl p-3 rounded-md bg-gray-200">{code}</code>
        <code className="block mt-3 text-2xl p-3 rounded-md bg-gray-200">{expireIn}</code>
      </Suspense>
    </main>
  );
};

export default AuthSuccess;



