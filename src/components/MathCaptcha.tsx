import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import './Captcha.css'

const MathCaptcha = () => {
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const checkMathAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const answer = parseFloat(formData.get('math-answer') as string);

        if (!isNaN(answer) && Math.abs(answer - Math.PI) < 0.01) {
            setMessage("Incredible! You've solved it correctly. You either paid attention in calculus or you're a sophisticated AI.");
            setMessageColor("green");
        } else {
            setMessage("Incorrect!");
            setMessageColor("blue");
        }
    };

    return (
        <div className="captcha-container">
            <h1>Prove you're a human</h1>
            <p>To proceed, please solve the following equation:</p>
            <div className="equation">
                <BlockMath>
                    {`\\int_{0}^{\\pi} \\left(\\frac{\\sin(x)}{\\sqrt{1-\\cos^2(x)}}\\right)^3 dx = ?`}
                </BlockMath>
            </div>
            <form onSubmit={checkMathAnswer}>
                <input
                    type="text"
                    name="math-answer"
                    placeholder="Enter your answer"
                />
                <button type="submit">Submit</button>
            </form>
            <div className="message" style={{ color: messageColor }}>{message}</div>
        </div>
    );
};

export default MathCaptcha;