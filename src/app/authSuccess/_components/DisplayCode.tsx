'use client';
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

export default function DisplayCode() {
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
                    const { accessToken } = data;
                    console.log('Success:', data);
                    window.location.href = `http://localhost:5200/chat?access_token=${accessToken}`;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [searchParams]);
    return (
        <>
            <code className="block mt-3 text-2xl p-3 rounded-md bg-gray-200">{code}</code>
            <code className="block mt-3 text-2xl p-3 rounded-md bg-gray-200">{expireIn}</code>
        </>
    );
}