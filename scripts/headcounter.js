const counter = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let counterData = data.projects[1];

    // Get full description
    let descriptions = counterData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    counter.innerHTML = `
        <h4>${counterData.name}</h4>
        <img id="count-img" src="${counterData.projectImage}" alt="${counterData.name}">
        ${fullDescriptionList}
        <a href="${counterData.githubLink}" target="_blank">View Project</a>
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