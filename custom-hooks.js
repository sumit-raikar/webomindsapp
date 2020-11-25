import React, { useState, useEffect } from 'react';

const useInterval = () => {
    const [timeInSecond, setTimeInSecond] = useState(0);
    useEffect(() => {
        const intervalId = setTimeInterval(() => { setInterval(seconds => seconds + 1) }, 10000)
        return () => clearInterval(intervalId);
    }, []);

    return timeInSecond;
}

export default useInterval;