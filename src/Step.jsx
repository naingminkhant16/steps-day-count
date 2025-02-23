import {useState} from "react";

const messages = [
    'Learn React',
    'Apply for jobs',
    'Invest your new income'
];

export default function Step() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) {
            setStep(s => s - 1);
        }
    }

    function handleNext() {
        if (step < 3) {
            setStep(s => s + 1);
            // setStep(s => s + 1); // increase state twice at the same time
        }
    }

    function handleOpen() {
        setIsOpen(!isOpen);
    }


    return (
        <div className="w-[500px] m-auto">
            <div className="mt-6 flex justify-end">
                <div onClick={handleOpen}>
                    {
                        isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width={20}
                                       viewBox="0 0 384 512">
                            <path
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 448 512">
                            <path
                                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                        </svg>)
                    }
                </div>
            </div>
            {isOpen && <div className="bg-gray-100 rounded-lg mt-6 p-6">
                <div className="flex justify-evenly items-center mb-10">
                    <div
                        className={"w-10 h-10  flex justify-center items-center rounded-full " + (step >= 1 ? 'bg-indigo-500 text-white ' : ' bg-gray-300')}>1
                    </div>
                    <div
                        className={"w-10 h-10  flex justify-center items-center rounded-full " + (step >= 2 ? 'bg-indigo-500 text-white ' : ' bg-gray-300')}>2
                    </div>
                    <div
                        className={"w-10 h-10  flex justify-center items-center rounded-full " + (step >= 3 ? 'bg-indigo-500 text-white ' : ' bg-gray-300')}>3
                    </div>
                </div>

                <p className="text-center font-bold text-lg mb-10">Step {step}: {messages[step - 1]}</p>

                <div className="flex justify-around items-center">
                    <button className="bg-indigo-500 text-white rounded-full py-2 px-3 font-bold text-sm"
                            onClick={handlePrevious}>Previous
                    </button>
                    <button className="bg-indigo-500 text-white rounded-full py-2 px-3 font-bold text-sm"
                            onClick={handleNext}>Next
                    </button>
                </div>
            </div>}
        </div>
    )
}