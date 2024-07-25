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
          // Construct a form to post data to actual app
          const form = document.createElement("form");
          form.method = "POST";
          form.action = "http://localhost:5200/authSuccess";

          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              const hiddenField = document.createElement("input");
              hiddenField.type = "hidden";
              hiddenField.name = key;
              hiddenField.value = data[key];
              form.appendChild(hiddenField);
            }
          }

          document.body.appendChild(form);
          form.submit();
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
