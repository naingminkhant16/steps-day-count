export default function Button({ bgColor, textColor, text, onClick }) {
    return <button
        className={`${bgColor} ${textColor} rounded-full py-2 px-3 font-bold text-sm`}
        onClick={onClick}>
        {text}
    </button>;
};