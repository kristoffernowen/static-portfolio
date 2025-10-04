import { openAboutModal, openProjectModal } from "./modal.js";
import { getMainTechImages } from "./util.js";

export function renderPortfolio(data, renderProjectsFn) {
  document.getElementById("name").innerText = data.name;
  document.getElementById("title").innerText = data.title;
  const about = document.getElementById("about");
  about.innerHTML = "";
  const aboutP = document.createElement("p");
  aboutP.innerText = data.about;
  const button = document.createElement("button");
  button.innerText = "Läs mer";
  button.addEventListener("click", () => openAboutModal(data.about));
  about.appendChild(aboutP);
  about.appendChild(button);

  renderProjectsFn(data);

  const contactHtml = `
    <a href="mailto:${data.contact.email}">E-post</a> |
    <a href="${data.contact.linkedin}">LinkedIn</a> |
    <a href="${data.contact.github}">GitHub</a>
  `;
  const mobileContact = document.getElementById("contact");
  if (mobileContact) mobileContact.innerHTML = contactHtml;
  const desktopContact = document.getElementById("contact-desktop-content");
  if (desktopContact) desktopContact.innerHTML = contactHtml;
}

export function renderProjects(data, currentPage, projectsPerPage) {
  const projectList = document.getElementById("projects");
  projectList.innerHTML = "";

  const start = currentPage * projectsPerPage;
  const end = Math.min(start + projectsPerPage, data.projects.length);
  for (let i = start; i < end; i++) {
    const p = data.projects[i];
    const item = document.createElement("div");
    item.classList.add("project");
    item.innerHTML = `
      <h4>${p.title}</h4>
      <p><strong>Byggt med:</strong></p>
      <div class="project-tech-images-div">${getMainTechImages(p)}</div>
      <p>${p.shortDescription}</p>
      <button class="project-readmore-btn" data-index="${i}">Läs mer</button>
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

  projectList.querySelectorAll(".project-readmore-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"), 10);
      openProjectModal(data.projects[idx]);
    });
  });
}
