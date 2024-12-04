import { useState } from 'react';
import './Captcha.css'

const UnicornCaptcha = () => {
    const [message, setMessage] = useState('');

    const checkUnicornAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("Great job!");
    };

    return (
        <div className="captcha-container">
            <h1>Prove you're an imaginary unicorn counter</h1>
            <div className="unicorn-captcha">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
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
            <form onSubmit={checkUnicornAnswer}>
                <input
                    type="text"
                    name="unicorn-answer"
                    placeholder="Enter your binary result"
                />
                <button type="submit">Submit</button>
            </form>
            <div className="message" style={{ color: 'purple' }}>{message}</div>
        </div>
    );
};

export default UnicornCaptcha;