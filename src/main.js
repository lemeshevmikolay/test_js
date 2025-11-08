function setupCounter(element) {
    let counter = 0;

    const adjustCounterValue = value => {
        if (value >= 100) return value - 100;
        if (value <= -100) return value + 100;
        return value;
    };

    const setCounter = value => {
        counter = adjustCounterValue(value);
        if (element) element.innerHTML = `${counter}`;
    };

    if (typeof document !== 'undefined') {
        const inc1 = document.getElementById('increaseByOne');
        const dec1 = document.getElementById('decreaseByOne');
        const inc2 = document.getElementById('increaseByTwo');
        const dec2 = document.getElementById('decreaseByTwo');

        if (inc1) inc1.addEventListener('click', () => setCounter(counter + 1));
        if (dec1) dec1.addEventListener('click', () => setCounter(counter - 1));
        if (inc2) inc2.addEventListener('click', () => setCounter(counter + 2));
        if (dec2) dec2.addEventListener('click', () => setCounter(counter - 2));
    }

    setCounter(0);
}

// якщо код виконується в браузері
if (typeof document !== 'undefined') {
    const element = document.getElementById('counter-value');
    setupCounter(element);
} else {
    // якщо код виконується в Node.js
    let test = 0;
    let result = test + 2;
    console.log("Running in Node.js. Result:", result);
}
