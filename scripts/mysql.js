const mysql = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let mysqlData = data.projects[2];

    // Get full description
    let descriptions = mysqlData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    mysql.innerHTML = `
        <h4>${mysqlData.name}</h4>
        <img src="${mysqlData.projectImage}" alt="${mysqlData.name}">
        ${fullDescriptionList}
        <a href="${mysqlData.githubLink}" target="_blank">View Project</a>
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