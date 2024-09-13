"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Backdrop, CircularProgress } from "@mui/material";

export default function DisplayCode({ redirectUrl }: { redirectUrl: string }) {

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
      window.location.href = `${redirectUrl}/auth/success?code=${encodedCode}&expires_in=${encodedExpireIn}`;
  }
  }, [searchParams, redirectUrl]);
  return (
    <>
    <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
