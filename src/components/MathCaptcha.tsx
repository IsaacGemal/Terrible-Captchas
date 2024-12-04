import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const MathCaptcha = () => {
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const checkMathAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const answer = parseFloat(formData.get('math-answer') as string);

        if (!isNaN(answer) && Math.abs(answer - Math.PI) < 0.01) {
            setMessage("Incredible! You've solved it correctly. You either paid attention in calculus or you're a sophisticated AI.");
            setMessageColor("text-green-600");
        } else {
            setMessage("Incorrect!");
            setMessageColor("text-blue-600");
        }
    };

    return (
        <div className="max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Prove you're a human</h2>
            <p className="text-sm text-gray-600 mb-4">To proceed, please solve the following equation:</p>
            <div className="bg-gray-50 p-4 rounded-md mb-4 overflow-x-auto">
                <BlockMath>
                    {`\\int_{0}^{\\pi} \\left(\\frac{\\sin(x)}{\\sqrt{1-\\cos^2(x)}}\\right)^3 dx = ?`}
                </BlockMath>
            </div>
            <form onSubmit={checkMathAnswer} className="space-y-4">
                <input
                    type="text"
                    name="math-answer"
                    placeholder="Enter your answer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </form>
            <div className={`mt-4 font-semibold ${messageColor}`}>{message}</div>
        </div>
    );
};

export default MathCaptcha;