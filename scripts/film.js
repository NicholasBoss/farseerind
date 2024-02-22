const film = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let filmData = data.projects[7];

    // Get full description
    let descriptions = filmData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    film.innerHTML = `
        <h4>${filmData.name}</h4>
        <img src="${filmData.projectImage}" alt="${filmData.name}">
        ${fullDescriptionList}
        <a href="${filmData.githubLink}" target="_blank">View Project</a>
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