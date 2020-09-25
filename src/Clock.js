import React, {useEffect, useState} from "react";

export function Clock() {
    const [date, setdate] = useState(new Date())

    useEffect(() => {
        let timerId = setInterval(() => {
            console.log('upadate time');
            setdate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId)
        }
    })

   
    return (
        <h1>{date.toLocaleTimeString()}</h1>
    ) 
}