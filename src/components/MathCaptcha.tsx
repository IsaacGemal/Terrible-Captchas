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
            setMessage("Nice! You've solved it correctly. You either paid attention in calculus or you're a sophisticated AI.");
            setMessageColor("text-green-600");
        } else {
            setMessage("Incorrect!");
            setMessageColor("text-blue-600");
        }
    };

    return (
        <div className="aspect-square w-full max-w-md bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="h-full flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">Prove you're a human</h2>
                    <p className="text-sm text-gray-600 mb-2">To proceed, please solve the following equation:</p>
                    <div className="flex-1 flex items-center justify-center bg-gray-50 p-2 sm:p-4 rounded-md mb-4 overflow-x-auto">
                        <div className="transform scale-[0.8] sm:scale-100 md:scale-125 origin-center">
                            <BlockMath>
                                {`\\int_{0}^{\\pi} \\left(\\frac{\\sin(x)}{\\sqrt{1-\\cos^2(x)}}\\right)^3 dx = ?`}
                            </BlockMath>
                        </div>
                    </div>
                </div>
                <div>
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
            </div>
        </div>
    );
};

export default MathCaptcha;