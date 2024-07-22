"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./_components/loading";
export default function Page() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-mono">Successfully logged in with ebay</h1>
      <h2 className="block mt-3 text-2xl">the acess code is:</h2>
      <Suspense fallback={<Loading />}>
        <code className="block mt-3 text-2xl">{code}</code>
      </Suspense>
    </main>
  );
}
