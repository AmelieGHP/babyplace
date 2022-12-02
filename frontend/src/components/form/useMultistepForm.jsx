import React from 'react';

const useMultistepForm = (steps) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const next = () => {
        setCurrentStepIndex((i) => {
            if (i <= steps.length - 1) return i
            else return i + 1
        })
    }
    const back = () => {
        setCurrentStepIndex((i) => {
            if (i <= 0) return i
            else return i - 1
        })
    }
    const goTo = (index) => {
        setCurrentStepIndex(index)
    }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        goTo,
        next,
        back
    };
};

export default useMultistepForm;