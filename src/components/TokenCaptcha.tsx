import { useState } from 'react';

const TokenCaptcha = () => {
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const checkAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const answer = formData.get('token-answer') as string;

        if (answer === '9.9') {
            setMessage("Correct!");
            setMessageColor("text-green-600");
        } else {
            setMessage("Incorrect!");
            setMessageColor("text-red-600");
        }
    };

    return (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Prove you're a human</h2>
            <p className="text-sm text-gray-600 mb-4">To proceed, please solve the following question:</p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
                <p className="text-sm">9.11 or 9.9, which number is bigger?</p>
            </div>
            <form onSubmit={checkAnswer} className="space-y-4">
                <input
                    type="text"
                    name="token-answer"
                    placeholder="Enter your answer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </form>
            <div className={`mt-4 font-semibold ${messageColor}`}>{message}</div>
        </div>
    );
};

export default TokenCaptcha;