import React, { useState, useEffect } from 'react';

export default function useCurrentWidth() {
    const [currenWidth, setCurrenWidth] = useState(window.innerWidth);

    const newWidth = () => setCurrenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', newWidth);
        return () => window.addEventListener('resize', newWidth);
    }, [currenWidth]);

    return [currenWidth]
}
