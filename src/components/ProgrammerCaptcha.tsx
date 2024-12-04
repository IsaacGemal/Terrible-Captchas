import { useState } from 'react';

const ProgrammerCaptcha = () => {
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const checkCodeAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const answer = formData.get('code-answer') as string;

        if (answer === '6') {
            setMessage("Great job! But can you explain the code?");
            setMessageColor("text-green-600");
        } else {
            setMessage("Incorrect! Keep trying, human... or are you?");
            setMessageColor("text-red-600");
        }
    };

    return (
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Prove you're a programmer</h2>
            <p className="text-sm text-gray-600 mb-4">To proceed, please solve the following programming puzzle:</p>
            <div className="bg-gray-50 p-2 sm:p-4 rounded-md mb-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm whitespace-pre-wrap">
                    <code className="language-python">
                        {`def mystery(func):
    def wrapper(*args, **kwargs):
        return chr(sum(ord(c) for c in str(func(*args, **kwargs))))
    return wrapper

@mystery
def enigma(x, y):
    return x ** y % 42

result = enigma(6, 7)
print(result)
# What is the output of this Python code?`}
                    </code>
                </pre>
            </div>
            <form onSubmit={checkCodeAnswer} className="space-y-4">
                <input
                    type="text"
                    name="code-answer"
                    placeholder="Enter your answer (a single character)"
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

export default ProgrammerCaptcha;