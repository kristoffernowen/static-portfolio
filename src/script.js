function renderPortfolio(data) {
  document.getElementById("name").innerText = data.name;
  document.getElementById("title").innerText = data.title;
  const about = document.getElementById("about");
  const aboutP = document.createElement("p");
  aboutP.innerText = data.about;
  const button = document.createElement("button");
  button.innerText = "Läs mer";
  button.onclick = () => {
    openAboutModal(data.about);
  };
  about.appendChild(aboutP);
  about.appendChild(button);

  const projectList = document.getElementById("projects");
  data.projects.forEach((p, i) => {
    const item = document.createElement("div");
    item.classList.add("project");
    const mainTechImages = getMainTechImages(i);
    item.innerHTML = `
      <h4>${p.title}</h4>
      <p><strong>Byggt med:</strong></p>
      ${mainTechImages}
      <p>${p.shortDescription}</p>
      <button onclick="openProjectModal(${i})">Läs mer</button>
      <div class="project-links">Länkar</div>
    `;
    const linksDiv = item.querySelector(".project-links");
    p.links.forEach((link) => {
      const div = document.createElement("div");
      linksDiv.appendChild(div);
      const a = document.createElement("a");
      a.href = link.url;
      a.innerText = link.name;
      a.target = "_blank";
      div.appendChild(a);
      linksDiv.appendChild(document.createTextNode(" ")); // Mellanslag mellan länkar
    });
    projectList.appendChild(item);
  });

  document.getElementById("contact").innerHTML = `
    <a href="mailto:${data.contact.email}">E-post</a> |
    <a href="${data.contact.linkedin}">LinkedIn</a> |
    <a href="${data.contact.github}">GitHub</a>
  `;
}

function openAboutModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>Mer om mig</h2>
      <p>${portfolioData.about}</p>
    </div>
  `;
}
function openProjectModal(i) {
  const project = portfolioData.projects[i];
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>${project.title}</h2>
      <p><strong>Teknik:</strong> ${project.techStack}</p>
      <p>${project.longDescription}</p>
      <div class="project-links">Länkar</div>
    </div>
  `;
  const linksDiv = modal.querySelector(".project-links");
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

  return `<div class="main-tech-images">${images.join("")}</div>`;
}

renderPortfolio(portfolioData);
