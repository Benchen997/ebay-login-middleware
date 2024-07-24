'use client';
export function LoginButton() {

    function loginOnClick() {
        console.log('Login button clicked');
    }
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            onClick={loginOnClick}
        >
            Login with eBay
        </button>
        );
}