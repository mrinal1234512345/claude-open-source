import { projects, addProject } from "./data.js";

const form = document.querySelector("#project-form");
const projectName = document.querySelector("#project-name");
const projectUrl = document.querySelector("#project-url");
const projectList = document.querySelector("#project-list");
const projectCount = document.querySelector("#project-count");
const contributionCount = document.querySelector("#contribution-count");

function renderProjects() {
    projectList.innerHTML = "";

    projects.forEach((project) => {
        const item = document.createElement("li");

        item.innerHTML = `
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">
                ${project.name}
            </a>
            <span>${project.contributions} contribution(s)</span>
        `;

        projectList.appendChild(item);
    });

    projectCount.textContent = projects.length;
    contributionCount.textContent = projects.reduce(
        (total, project) => total + project.contributions,
        0
    );
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const project = addProject({
        name: projectName.value.trim(),
        url: projectUrl.value.trim(),
        contributions: 0
    });

    if (!project.name || !project.url) {
        return;
    }

    form.reset();
    renderProjects();
});

renderProjects();
