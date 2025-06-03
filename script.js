const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();
const skillButtons = document.querySelectorAll('.skill-btn');
const skillDescription = document.getElementById('skill-description');
const skillInfo = {
    "HTML": "HTML (HyperTest Markup Language) is the backbone of all web pages, defining their structure.",
    "CSS": "CSS (Cascading Style sheets) is used to style the visual presentation of web pages, making them look great!", 
    "Javascript": "Javascript is a programming language that enables interactive web pages, allowing complex features and dynamic content." 
};

skillButtons.forEach(button => {
    button.addEventListener('click',() => {
        const skill = button.dataset.skill; // Get the 'data-skill' attribute
        skillDescription.testcontent = skillInfo[skill];
        skillDescription.style.color = '#0056b3'; // Change text color on interaction
    });
});
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // save user preference (optional, but good practice)
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else{
        localStorage.setItem('theme', 'light');
    }
});

// Apply saved theme on page load
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
});
const projectscontainer = document.getElementById('projects-container');

async function loadProject() {
    try {
        const response = await fetch('data/portifolio_items.json'); //Fetch the JSON file
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        const projects = await response.json(); // parse JSON data

        projects.forEach(projects => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3><span class="math-inline" >\{projects\.name\{"}"}</h3\></36\>
<p>{projects.descrption}</p>
<a href="${project.link}" target="_blank">view profile</a>
`;
projectscontainer.appendChild(projectCard);1
});
} catch (error) {
console.error('Error loading project:', error);
projectscontainer.innerHTML = '<p>Failed to load projects. Please try agin later.</p>';
}
}
