
import {Suspense} from 'react';
import Loading from './_components/loading';
import DisplayCode from "@/app/authSuccess/_components/DisplayCode";

const AuthSuccess = () => {
    // do not make page.tsx as client side, it will not work when build
    // page must be SSR as static page

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-mono">Successfully logged in with eBay</h1>
            <Suspense fallback={<Loading/>}>
                <DisplayCode/>
            </Suspense>
        </main>
    );
};

export default AuthSuccess;



