"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function DisplayCode() {

  const searchParams = useSearchParams();

  useEffect(() => {
    const codeParam = searchParams.get("code");
    const expireInParam = searchParams.get("expires_in");

    if (codeParam && expireInParam) {
      console.log("codeParam", codeParam);
      console.log("expireInParam", expireInParam);
      // Encode the parameters before redirecting
      const encodedCode = encodeURIComponent(codeParam);
      const encodedExpireIn = encodeURIComponent(expireInParam);
      window.location.href = `http://localhost:5200/auth/success?code=${encodedCode}&expires_in=${encodedExpireIn}`;
  }
  }, [searchParams]);
  return (
    <>
    </>
  );
}
