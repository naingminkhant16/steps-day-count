import {useState} from "react";

export default function DayCount() {
    const dateNow = new Date();

    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    dateNow.setDate(dateNow.getDate() + count);

    return (<>
            <div className="flex justify-center mt-6">
                <div className="text-center">
                    
                    <button className="px-3 text-white bg-indigo-500 rounded-full me-1 font-bold"
                            onClick={() => setStep(step - 1)}>-
                    </button>
                    <span className="font-bold">Step : {step}</span>
                    <button className="px-3 text-white bg-indigo-500 rounded-full ms-1 font-bold"
                            onClick={() => setStep(step + 1)}>+
                    </button>

                    <br/>

                    <button className="px-3 text-white bg-indigo-500 rounded-full me-1 mt-2 font-bold"
                            onClick={() => setCount(c => c - step)}>-
                    </button>
                    <span className="font-bold">Count : {count}</span>
                    <button className="px-3 text-white bg-indigo-500 rounded-full ms-1 font-bold"
                            onClick={() => setCount(c => c + step)}>+
                    </button>

                    <p className={'mt-3'}>
                        <span>{count === 0 ? 'Today is ' : count > 0 ? `${count} days from ` : `${Math.abs(count)} days ago was `}</span>
                        {dateNow.toDateString()}</p>
                </div>
            </div>
        </>
    );
}