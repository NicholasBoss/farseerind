const computing = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let computingData = data.projects[9];

    // Get full description
    let descriptions = computingData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    computing.innerHTML = `
        <h4>${computingData.name}</h4>
        <img src="${computingData.projectImage}" alt="${computingData.name}">
        ${fullDescriptionList}
        <a href="${computingData.githubLink}" target="_blank">View Project</a>
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