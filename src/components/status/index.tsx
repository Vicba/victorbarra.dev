
import {useState, useEffect} from 'react'

export default function Status() {
    const [time, setTime] = useState<string>("00:00:00 p.m.");
    const [awake, setAwake] = useState<boolean>(true);

    const updateTime = () => {

        const time = new Date().toLocaleString('en-US', {timeZone: 'Europe/Brussels'} )
        setTime(`${time.slice(-11, -6)}${time.slice(-3, -1)}.M.`)
        setTimeout(updateTime, 60 * 1000);

        if (new Date().getHours() < 7 || new Date().getHours() > 23) {
            setAwake(false)
        };
    }

    useEffect(() => {
        updateTime()
    },[])

    return (
        <p className="w-5/6 text-white/50 text-sm mb-10 text-center">
            The time is <span className="font-bold text-white/70">{time}</span> for me, so I'm
            probably{" "}
            <span className="font-bold text-white/70">{awake ? "up and available" : "sleeping"}</span>. I'll
            respond as soon as possible.
        </p>
    );
}
