const pendant = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let pendantData = data.projects[3];

    // Get full description
    let descriptions = pendantData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    pendant.innerHTML = `
        <h4>${pendantData.name}</h4>
        <img src="${pendantData.projectImage}" alt="${pendantData.name}">
        ${fullDescriptionList}
        <a href="${pendantData.githubLink}" target="_blank">View Project</a>
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