const contact = document.querySelector('.res-contact');
const education = document.querySelector('.res-education');
const dss = document.querySelector('.res-dss');
const skills = document.querySelector('.res-skills');
const professional = document.querySelector('.res-prof-exp');
const personal = document.querySelector('.res-pers-exp');
const projects = document.querySelector('.res-projects');
const honor = document.querySelector('.res-honor-award');

function displayResume(data) {
    // Use the data object to create the resume
    // console.log(data);

    let contactData = data.contact;
    let educationData = data.education;
    let dssData = data.dss;
    // console.log(dssData);
    // Create an element to display each part of the resume
    const contactElement = document.createElement('div');
    contactElement.classList.add('grid');
    const educationElement = document.createElement('div');
    educationElement.classList.add('grid');
    const dssElement = document.createElement('div');
    dssElement.classList.add('grid');
    const skillsElement = document.createElement('div');
    skillsElement.classList.add('grid');
    const professionalElement = document.createElement('div');
    professionalElement.classList.add('grid');
    const personalElement = document.createElement('div');
    personalElement.classList.add('grid');
    const projectsElement = document.createElement('div');
    projectsElement.classList.add('grid');
    const honorElement = document.createElement('div');
    honorElement.classList.add('grid');

    // Use the innerHTML property to set the HTML content from the JSON file
    // For each contact, education, dss, skills, professional, personal, projects, and honor
    // Use the data object to access the appropriate property

    // Contact
    contactElement.innerHTML = `
        <p>${contactData[0].phone}</p>
        <p>${contactData[0].email}</p>
        <p>${contactData[0].location}</p>
    `;
    // Education
    educationElement.innerHTML = `
        <p>${educationData[0].degree}</p>
        <p>${educationData[0].school}</p>
        <p>${educationData[0].location}</p>
        <p>${educationData[0].time}</p>
        <p class="gpa">GPA: ${educationData[0].gpa}</p>
        <p class="expected">Expected ${educationData[0].expected}</p>
    `;
    // DSS
    // For each dss
    // Use the data object to access the appropriate property
    // Use the innerHTML property to set the HTML content from the JSON file
    // Use the createElement() method to create an element to display each dss
    // Append each dss element to the dss section
    // Use a foreach loop to get each dss
    dssData.forEach(dss => {
        const dssItem = document.createElement('div');
        dssItem.innerHTML = `
            <p>Company: ${dss.project}</p>
            <p>Position: ${dss.position}</p>
            <p>${dss.description}</p>
        `;
        dssElement.appendChild(dssItem);
    });

    // Skills
    // For each skill
    // Use the data object to access the appropriate property
    // Use the innerHTML property to set the HTML content from the JSON file
    // Use the createElement() method to create an element to display each skill
    // Append each skill element to the skills section
    // Use a foreach loop to get each skill
    let skillsData = data.skills;
    skillsData.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.innerHTML = `
            <p>${skill.skill}</p>
        `;
        skillsElement.appendChild(skillItem);
    });

    // Professional
    // For each professional
    // Use the data object to access the appropriate property
    // Use the innerHTML property to set the HTML content from the JSON file
    // Use the createElement() method to create an element to display each professional
    // Append each professional element to the professional section
    // Use a foreach loop to get each professional
    let professionalData = data.professional;
    // console.log(professionalData);
    // console.log(descriptions);
    let fullDescription = [];
    professionalData.forEach(professional => {
        const professionalItem = document.createElement('div');
        professionalItem.classList.add('professional');
        let descriptions = professional.description;
        
        // Use a foreach loop to get each description
        descriptions.forEach(description => {
            fullDescription.push(`<p>${description.para}</p>`);
        });

        // console.log(fullDescription);

        // fullDescription = fullDescription.join('<br>');
        // replace the comma with a line break
        fullDescription = fullDescription.join('');
        
        
        // console.log(professionalElement);
        // console.log(descriptionElement);
        professionalItem.innerHTML = `
            <h4>${professional.name}</h4>
            <p>${professional.time}</p>
            ${fullDescription}
        `;

        professionalElement.appendChild(professionalItem);
    });

    // Personal
    // For each personal
    // Use the data object to access the appropriate property
    // Use the innerHTML property to set the HTML content from the JSON file
    // Use the createElement() method to create an element to display each personal
    // Append each personal element to the personal section
    // Use a foreach loop to get each personal
    let personalData = data.personal;
    // console.log(`PersonalData: ${personalData}`);

    personalData.forEach(personal => {
        const personalItem = document.createElement('div');

        personalItem.innerHTML = `
            <h4>${personal.name}</h4>
            <p>${personal.time}</p>
            <p>${personal.description[0].para}</p>
            <p>${personal.description[1].para}</p>
            <p>${personal.description[2].para}</p>
        `;
        // console.log(`Personal: ${personal.name}, ${personal.time}, ${personal.description}`);
        personalElement.appendChild(personalItem);


    });

    // Projects
    // For each project
    // Use the data object to access the appropriate property
    // Use the innerHTML property to set the HTML content from the JSON file
    // Use the createElement() method to create an element to display each project
    // Append each project element to the project section
    // Use a foreach loop to get each project
    let projectsData = data.projects;
    // console.log(`ProjectsData: ${projectsData}`);

    projectsData.forEach(project => {
        const projectItem = document.createElement('div');

        projectItem.innerHTML = `
            <h4>${project.name}</h4>
            <p>${project.description}</p>
        `;
        // console.log(`Project: ${project.name}, ${project.description}`);
        projectsElement.appendChild(projectItem);
    
    });

    // Honor
    // For each honor
    // Use the data object to access the appropriate property
    // Use the innerHTML property to set the HTML content from the JSON file
    // Use the createElement() method to create an element to display each honor
    // Append each honor element to the honor section
    // Use a foreach loop to get each honor
    let honorData = data.honor;
    // console.log(`HonorData: ${honorData}`);
    honorData.forEach(honor => {
        const honorItem = document.createElement('div');

        honorItem.innerHTML = `
            <p>${honor.name}: ${honor.time}</p>
        `;
        // console.log(`Honor: ${honor.name}, ${honor.time}`);
        honorElement.appendChild(honorItem);
    
    });

    // Append each element to the appropriate section
    
    contact.appendChild(contactElement);
    education.appendChild(educationElement);
    dss.appendChild(dssElement);
    skills.appendChild(skillsElement);
    professional.appendChild(professionalElement);
    personal.appendChild(personalElement);
    projects.appendChild(projectsElement);
    honor.appendChild(honorElement);


}

// read the JSON file
fetch('./data/resume.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayResume(data);
    })
    .catch(error => {
        console.log(error);
    });
