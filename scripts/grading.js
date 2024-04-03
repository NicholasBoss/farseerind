const grading = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let gradingData = data.projects[8];

    // Get full description
    let descriptions = gradingData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    grading.innerHTML = `
        <h4>${gradingData.name}</h4>
        <img src="${gradingData.projectImage}" alt="${gradingData.name}">
        ${fullDescriptionList}
    `;
}

fetch('./data/projects.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayCard(data);
    })
    .catch(error => {
        console.log(error);
    });