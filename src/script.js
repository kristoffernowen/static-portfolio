let PROJECTS_PER_PAGE = window.innerWidth <= 700 ? 6 : 3;
let currentPage = 0;

window.addEventListener("resize", () => {
  const newValue = window.innerWidth <= 700 ? 6 : 3;
  if (PROJECTS_PER_PAGE !== newValue) {
    PROJECTS_PER_PAGE = newValue;
    currentPage = 0;
    renderProjects(portfolioData);
  }
});

function renderPortfolio(data) {
  document.getElementById("name").innerText = data.name;
  document.getElementById("title").innerText = data.title;
  const about = document.getElementById("about");
  about.innerHTML = "";
  const aboutP = document.createElement("p");
  aboutP.innerText = data.about;
  const button = document.createElement("button");
  button.innerText = "Läs mer";
  button.onclick = () => {
    openAboutModal(data.about);
  };
  about.appendChild(aboutP);
  about.appendChild(button);

  renderProjects(data);

  document.getElementById("contact").innerHTML = `
  <a href="mailto:${data.contact.email}">E-post</a> |
  <a href="${data.contact.linkedin}">LinkedIn</a> |
  <a href="${data.contact.github}">GitHub</a>
`;
  const desktopContact = document.getElementById("contact-desktop-content");
  if (desktopContact) {
    desktopContact.innerHTML = `
    <a href="mailto:${data.contact.email}">E-post</a> |
    <a href="${data.contact.linkedin}">LinkedIn</a>
  `;
  }
}

function renderProjects(data) {
  const projectList = document.getElementById("projects");
  projectList.innerHTML = "";

  const start = currentPage * PROJECTS_PER_PAGE;
  const end = Math.min(start + PROJECTS_PER_PAGE, data.projects.length);
  for (let i = start; i < end; i++) {
    const p = data.projects[i];
    const item = document.createElement("div");
    item.classList.add("project");
    const mainTechImages = getMainTechImages(i);
    item.innerHTML = `
  <div>
    <h4>${p.title}</h4>
    <p><strong>Byggt med:</strong></p>
    <div class="project-tech-images-div">${mainTechImages}</div>
  </div>
  <p>${p.shortDescription}</p>
  
  <button onclick="openProjectModal(${i})">Läs mer</button>
  <div class="project-links"></div>
`;
    const linksDiv = item.querySelector(".project-links");
    if (p.links && p.links.length > 0) {
      p.links.forEach((link) => {
        const div = document.createElement("div");
        linksDiv.appendChild(div);
        const a = document.createElement("a");
        a.href = link.url;
        a.innerText = link.name;
        a.target = "_blank";
        div.appendChild(a);
        linksDiv.appendChild(document.createTextNode(" "));
      });
    }
    projectList.appendChild(item);
  }

  let navDiv = document.getElementById("project-nav");
  if (!navDiv) {
    navDiv = document.createElement("div");
    navDiv.id = "project-nav";
    projectList.parentNode.appendChild(navDiv);
  }
  navDiv.innerHTML = `
    <button id="prev-btn" ${
      currentPage === 0 ? "disabled" : ""
    }>Föregående</button>
    <button id="next-btn" ${
      end >= data.projects.length ? "disabled" : ""
    }>Nästa</button>
  `;

  document.getElementById("prev-btn").onclick = () => {
    if (currentPage > 0) {
      currentPage--;
      renderProjects(data);
    }
  };
  document.getElementById("next-btn").onclick = () => {
    if (end < data.projects.length) {
      currentPage++;
      renderProjects(data);
    }
  };
}

function openAboutModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.innerHTML = `
    <div class="about-modal-content">
      <button class="close-modal-btn" onclick="closeModal()" aria-label="Stäng">&times;</button>
      <h2>Mer om mig</h2>
      <p>${portfolioData.about}</p>
      <p>CV</p>
      <p>Bild</p>
    </div>
  `;
}
function openProjectModal(i) {
  const project = portfolioData.projects[i];
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.innerHTML = `
    <div class="project-modal-content">
      <button class="close-modal-btn" onclick="closeModal()" aria-label="Stäng">&times;</button>
      <h2>${project.title}</h2>
      <p><strong>Teknik:</strong> ${project.techStack}</p>
      <p>${project.longDescription}</p>
      <div class="project-links"></div>
    </div>
  `;
  const linksDiv = modal.querySelector(".project-links");
  if (project.links && project.links.length > 0) {
    project.links.forEach((link) => {
      const div = document.createElement("div");
      linksDiv.appendChild(div);
      const a = document.createElement("a");
      a.href = link.url;
      a.innerText = link.name;
      a.target = "_blank";
      div.appendChild(a);
      linksDiv.appendChild(document.createTextNode(" ")); // Mellanslag mellan länkar
    });
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function getMainTechImages(i) {
  const project = portfolioData.projects[i];
  const images = [];
  if (project.techStack.includes("React")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" title="React" />`
    );
  }
  if (project.techStack.includes("ASP.NET Core")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" title=".NET" />`
    );
  }
  if (project.techStack.includes("Blazor")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg" alt="Blazor" title="Blazor" />`
    );
  }
  if (project.techStack.includes("TypeScript")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" />`
    );
  }
  if (project.techStack.includes("Angular")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg" alt="Angular" title="Angular" />`
    );
  }

  return `<div class="main-tech-images">${images.join("")}</div>`;
}

document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target === this) {
    closeModal();
  }
});

document
  .getElementById("show-projects-btn")
  .addEventListener("click", function () {
    document
      .getElementById("projects-section")
      .scrollIntoView({ behavior: "smooth" });
  });

renderPortfolio(portfolioData);
