const holes = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let holesData = data.projects[0];

    // Get full description
    let descriptions = holesData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    holes.innerHTML = `
        <h4>${holesData.name}</h4>
        <img src="${holesData.projectImage}" alt="${holesData.name}">
        ${fullDescriptionList}
        <a href="${holesData.githubLink}" target="_blank">View Project</a>
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