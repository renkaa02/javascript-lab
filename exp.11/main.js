// main.js

import {
    classes,
    addClass,
    formatTime
} from "./scheduler.js";


const form =
    document.getElementById("classForm");

const scheduleList =
    document.getElementById("scheduleList");

const currentClass =
    document.getElementById("currentClass");

const currentTeacher =
    document.getElementById("currentTeacher");

const timer =
    document.getElementById("timer");

const timerStatus =
    document.getElementById("timerStatus");

const startButton =
    document.getElementById("startTimer");

const stopButton =
    document.getElementById("stopTimer");

const classCount =
    document.getElementById("classCount");

const currentDate =
    document.getElementById("currentDate");


let selectedClass = null;

let timerInterval = null;

let timerTimeout = null;


/* Display today's date */

currentDate.textContent =
    new Date().toLocaleDateString(
        "en-IN",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );


/* ADD CLASS */

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const subject =
        document.getElementById("subject").value;

    const teacher =
        document.getElementById("teacher").value;

    const startTime =
        document.getElementById("startTime").value;

    const duration =
        document.getElementById("duration").value;


    addClass(
        subject,
        teacher,
        startTime,
        duration
    );


    form.reset();

    renderSchedule();

});


/* DISPLAY SCHEDULE */

function renderSchedule() {

    classCount.textContent =
        `${classes.length} ${
            classes.length === 1
                ? "Class"
                : "Classes"
        }`;


    if (classes.length === 0) {

        scheduleList.innerHTML = `
            <div class="empty">
                No classes scheduled yet.
            </div>
        `;

        return;
    }


    scheduleList.innerHTML = "";


    classes.forEach(classItem => {

        const card =
            document.createElement("div");

        card.className = "class-card";


        card.innerHTML = `

            <div class="class-info">

                <h3>
                    ${classItem.subject}
                </h3>

                <p>
                    ${classItem.teacher}
                </p>

                <p>
                    ${classItem.startTime}
                    · ${classItem.duration} minutes
                </p>

            </div>


            <div class="class-actions">

                <span class="status upcoming">
                    ${classItem.status}
                </span>

                <button
                    class="select-button"
                    data-id="${classItem.id}">
                    Select
                </button>

            </div>

        `;


        scheduleList.appendChild(card);

    });


    /* Select class */

    document
        .querySelectorAll(".select-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                function() {

                    const id =
                        Number(this.dataset.id);

                    selectedClass =
                        classes.find(
                            item => item.id === id
                        );

                    showSelectedClass();

                }
            );

        });

}


/* SHOW SELECTED CLASS */

function showSelectedClass() {

    if (!selectedClass) return;


    currentClass.textContent =
        selectedClass.subject;

    currentTeacher.textContent =
        `Teacher: ${selectedClass.teacher}`;


    timer.textContent =
        formatTime(
            selectedClass.remaining
        );


    timerStatus.textContent =
        `${selectedClass.duration} minute class`;


    startButton.disabled = false;

}


/* START TIMER */

startButton.addEventListener(
    "click",
    startClassTimer
);


function startClassTimer() {

    if (!selectedClass) return;


    clearInterval(timerInterval);

    clearTimeout(timerTimeout);


    selectedClass.status = "Ongoing";


    timerStatus.textContent =
        "Class in progress";


    startButton.disabled = true;

    stopButton.disabled = false;


    updateScheduleStatuses();


    /* setInterval updates every second */

    timerInterval = setInterval(() => {

        selectedClass.remaining--;

        timer.textContent =
            formatTime(
                selectedClass.remaining
            );


        if (selectedClass.remaining <= 0) {

            finishClass();

        }

    }, 1000);


    /*
        setTimeout acts as a safety mechanism.
        It fires when the complete class duration
        has elapsed.
    */

    timerTimeout = setTimeout(() => {

        finishClass();

    }, selectedClass.remaining * 1000);

}


/* FINISH CLASS */

function finishClass() {

    clearInterval(timerInterval);

    clearTimeout(timerTimeout);


    selectedClass.remaining = 0;

    selectedClass.status = "Completed";


    timer.textContent = "00:00:00";

    timerStatus.textContent =
        "Class completed ✓";


    startButton.disabled = true;

    stopButton.disabled = true;


    updateScheduleStatuses();

}


/* STOP TIMER */

stopButton.addEventListener(
    "click",
    function() {

        clearInterval(timerInterval);

        clearTimeout(timerTimeout);


        selectedClass.status = "Paused";


        timerStatus.textContent =
            "Timer paused";


        startButton.disabled = false;

        stopButton.disabled = true;


        updateScheduleStatuses();

    }
);


/* UPDATE SCHEDULE */

function updateScheduleStatuses() {

    document
        .querySelectorAll(".class-card")
        .forEach((card, index) => {

            const classItem =
                classes[index];

            const status =
                card.querySelector(".status");


            status.textContent =
                classItem.status;


            status.className =
                "status " +
                classItem.status
                    .toLowerCase();

        });

}


/*
    Real-time scheduler check.

    Runs every second.
*/

setInterval(() => {

    updateScheduleStatuses();

}, 1000);


/* Initial display */

renderSchedule();
