const batter = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let batterData = data.projects[4];

    // Get full description
    let descriptions = batterData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    batter.innerHTML = `
        <h4>${batterData.name}</h4>
        <img src="${batterData.projectImage}" alt="${batterData.name}">
        ${fullDescriptionList}
        <a href="${batterData.githubLink}" target="_blank">View Project</a>
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