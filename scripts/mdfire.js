const mdfire = document.querySelector('.project-card')
let fullDescriptionList = []
function displayCard (data) {
    let mdfireData = data.projects[5];

    // Get full description
    let descriptions = mdfireData.fullDescription;

    descriptions.forEach(description => {
        fullDescriptionList.push(`<p class="full-description">${description.para}</p>`);
    });

    fullDescriptionList = fullDescriptionList.join('');

    mdfire.innerHTML = `
        <h4>${mdfireData.name}</h4>
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