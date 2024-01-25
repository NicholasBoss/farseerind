const clearview = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let clearviewData = data.projects[6];

    // Get full description
    let descriptions = clearviewData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    clearview.innerHTML = `
        <h4>${clearviewData.name}</h4>
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