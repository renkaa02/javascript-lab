// timer.js

export function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function startCountdown(totalSeconds, updateDisplay, onComplete) {
    let remaining = totalSeconds;

    updateDisplay(formatTime(remaining));

    const interval = setInterval(() => {
        remaining--;

        updateDisplay(formatTime(remaining));

        if (remaining <= 0) {
            clearInterval(interval);
            onComplete();
        }
    }, 1000);
}
