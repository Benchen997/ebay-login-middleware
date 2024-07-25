"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function DisplayCode() {
  const [code, setCode] = useState<string | null>(null);
  const [expireIn, setExpireIn] = useState<number | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const codeParam = searchParams.get("code");
    const expireInParam = searchParams.get("expires_in");
    setCode(codeParam);
    setExpireIn(Number(expireInParam));

    if (codeParam && expireInParam) {
      // Send code and expireIn to server
      fetch("http://localhost:3000/api/auth/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: codeParam,
          expires_in: Number(expireInParam),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const {access_token, refresh_token, expires_in} = data;
          // redirect to actuall app with token
          if (!access_token || !refresh_token || !expires_in) {
            alert("Error: Missing tokens");
            window.location.href = "http://localhost:5200/login";
            return;
          }
          window.location.href = `http://localhost:5200/auth/success?access_token=${access_token}&refresh_token=${refresh_token}&expires_in=${expires_in}`;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [searchParams]);
  return (
    <>
      <code className="block mt-3 text-2xl p-3 rounded-md bg-gray-200">
        {code}
      </code>
      <code className="block mt-3 text-2xl p-3 rounded-md bg-gray-200">
        {expireIn}
      </code>
    </>
  );
}
