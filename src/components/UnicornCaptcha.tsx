import { useState } from 'react';

const UnicornCaptcha = () => {
    const [message, setMessage] = useState('');

    const checkUnicornAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("Great job!");
    };

    return (
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Prove you're an imaginary unicorn counter</h2>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" className="w-full h-auto max-w-lg mx-auto scale-90 sm:scale-100">
                    <rect width="100%" height="100%" fill="#f8f8f8" />
                    <text x="10" y="30" fontFamily="Comic Sans MS, cursive" fontSize="14" fill="#333">
                        Prove you're human: How many 🦄 can you spot?
                    </text>
                    <text x="10" y="50" fontFamily="Comic Sans MS, cursive" fontSize="10" fill="#666">
                        (Hint: They're invisible and imaginary)
                    </text>
                    <path d="M20,70 Q40,20 60,70 T100,70" stroke="pink" fill="none" strokeWidth="2" />
                    <path d="M120,70 Q140,120 160,70 T200,70" stroke="lightblue" fill="none" strokeWidth="2" />
                    <text x="220" y="75" fontFamily="Wingdings" fontSize="24" fill="#999" transform="rotate(15,220,75)">
                        ✧✦✩✪✫✬✭
                    </text>
                    <text x="10" y="120" fontFamily="Comic Sans MS, cursive" fontSize="12" fill="#333">
                        Now divide that number by π and
                    </text>
                    <text x="10" y="140" fontFamily="Comic Sans MS, cursive" fontSize="12" fill="#333">
                        convert to binary. Enter result below:
                    </text>
                </svg>
            </div>
            <form onSubmit={checkUnicornAnswer} className="space-y-4">
                <input
                    type="text"
                    name="unicorn-answer"
                    placeholder="Enter your binary result"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </form>
            <div className="mt-4 font-semibold text-purple-600">{message}</div>
        </div>
    );
};

export default UnicornCaptcha;