import { useState } from 'react';
import './Captcha.css'

const ProgrammerCaptcha = () => {
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const checkCodeAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const answer = formData.get('code-answer') as string;

        if (answer === '6') {
            setMessage("Great job! But can you explain the code?");
            setMessageColor("green");
        } else {
            setMessage("Incorrect! Keep trying, human... or are you?");
            setMessageColor("red");
        }
    };

    return (
        <div className="captcha-container">
            <h1>Prove you're a programmer</h1>
            <p>To proceed, please solve the following programming puzzle:</p>
            <div className="question">
                <pre><code className="python">
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
                </code></pre>
            </div>
            <form onSubmit={checkCodeAnswer}>
                <input
                    type="text"
                    name="code-answer"
                    placeholder="Enter your answer (a single character)"
                />
                <button type="submit">Submit</button>
            </form>
            <div className="message" style={{ color: messageColor }}>{message}</div>
        </div>
    );
};

export default ProgrammerCaptcha;