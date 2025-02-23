import {useState} from "react";

export default function DayCountWithRange() {
    const date = new Date();
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    date.setDate(date.getDate() + count);

    function handleReset() {
        setStep(1);
        setCount(0);
    }

    return (
        <>
            <div className="text-center mt-12">
                <input type="range" min={0} max={10} className={'mr-2'} value={step}
                       onChange={(e) => setStep(Number(e.target.value))}/>
                <span>{step}</span>

                <div className="mt-3">
                    <button className="px-3 text-white bg-indigo-500 rounded-full me-1 font-bold cursor-pointer"
                            onClick={() => setCount(c => c - step)}>-
                    </button>
                    <input type="number" className={'border rounded px-1'} value={count}
                           onChange={(e) => setCount(Number(e.target.value))}/>
                    <button className="px-3 text-white bg-indigo-500 rounded-full ms-1 font-bold cursor-pointer"
                            onClick={() => setCount(c => c + step)}>+
                    </button>
                </div>

                <div className="mt-3 font-semibold">
                    {date.toDateString()}
                </div>
                <div className="mt-3">
                    <button className={'px-3 text-white bg-indigo-500 rounded-full font-bold cursor-pointer'}
                            onClick={handleReset}>Reset
                    </button>
                </div>
            </div>
        </>
    )
}