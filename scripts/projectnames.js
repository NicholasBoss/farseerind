const dropdown = document.querySelector('.project-names')

// read the projects.json file, find the names and add them to the dropdown as links

function displayNames(data) {
    let projectsData = data.projects;
    projectsData.forEach(project => {
        const projectItem = document.createElement('a');
        projectItem.setAttribute('href', `${project.link}`)
        projectItem.innerHTML = `
            <p>${project.name}</p>
        `;
        dropdown.appendChild(projectItem);
    });
}

fetch('./data/projects.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayNames(data);
    })
    .catch(error => {
        console.log(error);
    });