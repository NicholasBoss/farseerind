const classes = document.querySelector('.ta-classes')
const calendly = document.querySelector('.ta-calendly')
const calendlyWidget = document.querySelector('.calendly-inline-widget');
const semester = document.querySelector('#semester');

// If the current date is between the start and end dates of the semester,
// display the current semester in the span with id="semester"

function displaySemester(data) {
    // let callink = data.calendly[0];
    const today = new Date();
    if (today >= new Date(2023, 11, 8) && today <= new Date(2024, 4, 1)) {
        semester.innerHTML = "WINTER 2024";
        // calendlyWidget.setAttribute('data-url', `${callink.winter}`);
    } else if (today >= new Date(2024, 4, 1) && today <= new Date(2024, 7, 14)) {
        semester.innerHTML = "SPRING 2024";
        // calendlyWidget.setAttribute('data-url', `${callink.spring}`);
    } else if (today >= new Date(2024, 9, 11) && today <= new Date(2024, 11, 14)) {
        semester.innerHTML = "FALL 2024";
        // calendlyWidget.setAttribute('data-url', `${callink.fall}`);
    } else {
        classes.style.display = "none";
        calendly.innerHTML = `<h2>I am currently out of office. Please check back when the next semester begins.</h2>`;
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

