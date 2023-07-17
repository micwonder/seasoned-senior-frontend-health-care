/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = React.useState(false);

    const updateTarget = React.useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);
    React.useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener("change", updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener("change", updateTarget);
    }, []);

    return targetReached;
};
