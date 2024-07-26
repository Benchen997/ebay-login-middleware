import DisplayCode from "@/app/authSuccess/_components/DisplayCode";
import { Suspense } from "react";

export default function Page() {
  // do not make page.tsx as client side, it will not work when build
  // page must be SSR as static page

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <DisplayCode />
      </Suspense>
    </main>
  );
}
