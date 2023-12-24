const projectCards = document.querySelector('.project-cards')


function displayCards(data) {
    let projectsData = data.projects;
    projectsData.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.setAttribute('class', 'project-card')
        projectItem.innerHTML = `
            <h4>${project.name}</h4>
            <p>${project.description}</p>
            <a href="${project.link}">Learn More</a>
        `;
        projectCards.appendChild(projectItem);
    });
}

fetch('./data/projects.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayCards(data);
    })
    .catch(error => {
        console.log(error);
    });