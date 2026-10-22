// scheduler.js

export let classes = [];


/* Add a new class */

export function addClass(subject, teacher, startTime, duration) {

    const newClass = {

        id: Date.now(),

        subject: subject,

        teacher: teacher,

        startTime: startTime,

        duration: Number(duration),

        status: "Upcoming",

        remaining: Number(duration) * 60

    };

    classes.push(newClass);

    // Sort classes according to start time

    classes.sort((a, b) =>
        a.startTime.localeCompare(b.startTime)
    );

}


/* Convert HH:MM into minutes */

export function timeToMinutes(time) {

    const [hours, minutes] = time
        .split(":")
        .map(Number);

    return hours * 60 + minutes;
}


/* Format seconds into HH:MM:SS */

export function formatTime(totalSeconds) {

    totalSeconds = Math.max(0, totalSeconds);

    const hours = Math.floor(totalSeconds / 3600);

    const minutes =
        Math.floor((totalSeconds % 3600) / 60);

    const seconds =
        totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:
            ${String(minutes).padStart(2, "0")}:
            ${String(seconds).padStart(2, "0")}`
        .replace(/\s/g, "");
}
