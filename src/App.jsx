import Step from "./Step.jsx";
import DayCount from "./DayCount.jsx";
import DayCountWithRange from "./DayCountWithRange.jsx";
import {useState} from "react";

export default function App() {
    const [tab, setTab] = useState('STEP');
    return (
        <>
            <div className="flex justify-center w-full mt-3">
                <button
                    className={"cursor-pointer py-2 px-3 rounded-full text-white font-bold mr-4 " + (tab === 'STEP' ? 'bg-indigo-500' : 'bg-indigo-300')}
                    onClick={() => setTab('STEP')}>Step
                </button>
                <button
                    className={"cursor-pointer py-2 px-3 rounded-full text-white font-bold mr-4 " + (tab === 'DAY' ? 'bg-indigo-500' : 'bg-indigo-300')}
                    onClick={() => setTab('DAY')}>Day Count
                </button>
                <button
                    className={"cursor-pointer py-2 px-3 rounded-full text-white font-bold " + (tab === 'RANGE' ? 'bg-indigo-500' : 'bg-indigo-300')}
                    onClick={() => setTab('RANGE')}>Day Count Range
                </button>
            </div>
            {tab === 'STEP' && <Step/>}
            {tab === 'DAY' && <DayCount/>}
            {tab === 'RANGE' && <DayCountWithRange/>}
        </>
    );
}