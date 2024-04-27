const classes = document.querySelector('.ta-classes')
const help = document.querySelector('.ta-help')
const calendly = document.querySelector('.ta-calendly')
const calendlyWidget = document.querySelector('.calendly-inline-widget');
const semester = document.querySelector('#semester');

// If the current date is between the start and end dates of the semester,
// display the current semester in the span with id="semester"

function displaySemester(data) {
    // let callink = data.calendly[0];
    const today = new Date();
    // today = Date(2024, 3, 22);
    // console.log(new DATE(today));
    if (today >= new Date(2023, 11, 8) && today <= new Date(2024, 3, 9)) {
        semester.innerHTML = "WINTER 2024";
        // calendlyWidget.setAttribute('data-url', `${callink['winter']}`);
    } else if (today >= new Date(2024, 3, 22) && today <= new Date(2024, 6, 14)) {
        semester.innerHTML = "SPRING 2024";
        // calendlyWidget.setAttribute('data-url', `${callink['spring']}`);
    } else if (today >= new Date(2024, 8, 16) && today <= new Date(2024, 11, 17)) {
        semester.innerHTML = "FALL 2024";
        // calendlyWidget.setAttribute('data-url', `${callink['fall']}`);
    } else {
        classes.style.display = "none";
        help.style.display = "none";

        winter = new Date(2025, 0, 8);
        spring = new Date(2024, 3, 22);
        fall = new Date(2024, 8, 16);

        timer = fall - today;
        days = 1000 * 60 * 60 * 24;
        if (Math.floor(timer / days) > 1) {
            calendly.innerHTML = `<h2>I am currently out of office. Please check back when the next semester begins.</h2>
            <h3>The next semester begins in <ins>${Math.floor(timer / days)}</ins> days on ${fall.toDateString()}</h3>
            <p>If you need to contact me, please use Canvas messaging or Microsoft Teams.</p>
            `;
        } else {
            calendly.innerHTML = `<h2>I am currently out of office. Please check back when the next semester begins.</h2>
            <h3>The next semester begins in <ins>${Math.floor(timer / days)}</ins> day on ${fall.toDateString()}</h3>
            <p>If you need to contact me, please use Canvas messaging or Microsoft Teams.</p>
            `;
        }
        // calendlyWidget.setAttribute('data-url', `${callink.out}`);
    }
}

function displayClasses(data) {
    let classesData = data.classes;
    classesData.forEach(classObj => {
        const classItem = document.createElement('div');
        classItem.setAttribute('class', 'ta-class')
        classItem.innerHTML = `
            <h4>${classObj.code}-${classObj.section} - ${classObj.name}</h4>
            <p>${classObj.time} - ${classObj.teacher}</p>
        `;
        classes.appendChild(classItem);
});


}

fetch('./data/ta.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayClasses(data);
        displaySemester(data);
        
    })
    .catch(error => {
        console.log(error);
    });

