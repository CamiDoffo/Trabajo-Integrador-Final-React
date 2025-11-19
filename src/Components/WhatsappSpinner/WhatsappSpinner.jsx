import './WhatsappSpinner.css';

export default function WhatsAppSpinner({
    size = 40,
    color = '#25d366'
}) {
    return (
        <div className="spinner-container">
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={color}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="70 200"
                    strokeDashoffset="0"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
{/*             <img src='/avatar-img.jpg' width={100} height={100}/> */}
        </div>
    );
}