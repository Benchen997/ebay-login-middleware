"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function DisplayCode() {

  const searchParams = useSearchParams();

  useEffect(() => {
    const codeParam = searchParams.get("code");
    const expireInParam = searchParams.get("expires_in");

    if (codeParam && expireInParam) {
      console.log("codeParam", codeParam);
      console.log("expireInParam", expireInParam);
      window.location.href = `http://localhost:5200/auth/success?code=${codeParam}&expires_in=${expireInParam}`;
  }
  }, [searchParams]);
  return (
    <>
    </>
  );
}
