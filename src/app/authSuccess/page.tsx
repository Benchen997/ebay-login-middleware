'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from './_components/loading';

const AuthSuccess = () => {
  const router = useRouter();
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const codeParam = router.query.code as string;
      setCode(codeParam);
    }
  }, [router.isReady, router.query]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-mono">Successfully logged in with eBay</h1>
     
    </main>
  );
};

export default AuthSuccess;



