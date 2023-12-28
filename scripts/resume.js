// const contact = document.querySelector('.res-contact');
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

    // let contactData = data.contact;
    // console.log(dssData);
    // Create an element to display each part of the resume
    // const contactElement = document.createElement('div');
    // contactElement.classList.add('grid');
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
    // contactElement.innerHTML = `
    //     <p>${contactData[0].phone}</p>
    //     <p>${contactData[0].email}</p>
    //     <p>${contactData[0].location}</p>
    // `;
    // Education
    let educationData = data.education;
    let educationItem = document.createElement('ul');
    educationItem.innerHTML = `
        <li>${educationData[0].degree}</li>
        <li>${educationData[0].school}</li>
        <li>${educationData[0].location}</li>
        <li>${educationData[0].time}</li>
        <li class="gpa">GPA: ${educationData[0].gpa}</li>
        <li class="expected">Expected Graduation: ${educationData[0].expected}</li>
    `;
    educationElement.appendChild(educationItem);
    // DSS
    // For each dss
    // Use the data object to access the appropriate property
    // Use the innerHTML property to set the HTML content from the JSON file
    // Use the createElement() method to create an element to display each dss
    // Append each dss element to the dss section
    // Use a foreach loop to get each dss
    let dssData = data.dss;
    dssData.forEach(dss => {
        const dssItem = document.createElement('ul');
        dssItem.innerHTML = `
            <li>Company: ${dss.project}</li>
            <li>Position: ${dss.position}</li>
            <li>${dss.description}</li>
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
    let skillList = []
    let skillItem = document.createElement('ul');
    let skillsData = data.skills;
    skillsData.forEach(skill => {
        // console.log(skill.skill);
        skillList.push(`<li>${skill.skill}</li>`);
    });
    skillList = skillList.join('');
    // console.log(skillList);
    skillItem.innerHTML = `
        ${skillList}
    `;
    skillsElement.appendChild(skillItem);



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
        const professionalItem = document.createElement('ul');
        professionalItem.classList.add('professional');
        let descriptions = professional.description;
        
        // Use a foreach loop to get each description
        descriptions.forEach(description => {
            fullDescription.push(`<li>${description.para}</li>`);
        });

        // console.log(fullDescription);

        // fullDescription = fullDescription.join('<br>');
        // replace the comma with a line break
        fullDescription = fullDescription.join('');
        
        
        // console.log(professionalElement);
        // console.log(descriptionElement);
        professionalItem.innerHTML = `
            <h4>${professional.name}</h4>
            <li>${professional.time}</li>
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
        const personalItem = document.createElement('ul');

        personalItem.innerHTML = `
            <h4>${personal.name}</h4>
            <li>${personal.time}</li>
            <li>${personal.description[0].para}</li>
            <li>${personal.description[1].para}</li>
            <li>${personal.description[2].para}</li>
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
        const projectItem = document.createElement('ul');

        projectItem.innerHTML = `
            <h4>${project.name}</h4>
            <li>${project.description}</li>
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
    
    // contact.appendChild(contactElement);
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
