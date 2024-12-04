import { useState } from 'react';
import './Captcha.css'

const TokenCaptcha = () => {
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const checkAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const answer = formData.get('token-answer') as string;

        if (answer === '9.9') {
            setMessage("Correct!");
            setMessageColor("green");
        } else {
            setMessage("Incorrect!");
            setMessageColor("red");
        }
    };

    return (
        <div className="captcha-container">
            <h1>Prove you're a human</h1>
            <p>To proceed, please solve the following question:</p>
            <div className="token-captcha">
                <p>9.11 or 9.9, which number is bigger?</p>
            </div>
            <form onSubmit={checkAnswer}>
                <input
                    type="text"
                    name="token-answer"
                    placeholder="Enter your answer"
                />
                <button type="submit">Submit</button>
            </form>
            <div className="message" style={{ color: messageColor }}>{message}</div>
        </div>
    );
};

export default TokenCaptcha;