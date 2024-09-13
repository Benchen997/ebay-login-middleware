import DisplayCode from "@/app/DisplayCode";
import { Suspense } from "react";

export default function Page() {
  // do not make page.tsx as client side, it will not work when build
  // page must be SSR as static page
  const redirectUrl = process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:5200";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <DisplayCode redirectUrl = {redirectUrl}/>
      </Suspense>
    </main>
  );
}
