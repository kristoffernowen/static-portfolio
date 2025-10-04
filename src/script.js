import { portfolioData } from "./data.js";
import { renderPortfolio, renderProjects } from "./render.js";
import { setupModalCloseListener } from "./modal.js";

let PROJECTS_PER_PAGE = window.innerWidth <= 700 ? 6 : 3;
let currentPage = 0;

window.addEventListener("resize", () => {
  const newValue = window.innerWidth <= 700 ? 6 : 3;
  if (PROJECTS_PER_PAGE !== newValue) {
    PROJECTS_PER_PAGE = newValue;
    currentPage = 0;
    renderProjects(portfolioData, currentPage, PROJECTS_PER_PAGE);
    setupProjectNav();
  }
});

function setupProjectNav() {
  let navDiv = document.getElementById("project-nav");
  if (!navDiv) {
    navDiv = document.createElement("div");
    navDiv.id = "project-nav";
    document.getElementById("projects-section").appendChild(navDiv);
  }
  const totalProjects = portfolioData.projects.length;
  const end = Math.min((currentPage + 1) * PROJECTS_PER_PAGE, totalProjects);

  navDiv.innerHTML = `
    <button id="prev-btn" ${
      currentPage === 0 ? "disabled" : ""
    }>Föregående</button>
    <button id="next-btn" ${
      end >= totalProjects ? "disabled" : ""
    }>Nästa</button>
  `;

  document.getElementById("prev-btn").onclick = () => {
    if (currentPage > 0) {
      currentPage--;
      renderProjects(portfolioData, currentPage, PROJECTS_PER_PAGE);
      setupProjectNav();
    }
  };
  document.getElementById("next-btn").onclick = () => {
    if (end < totalProjects) {
      currentPage++;
      renderProjects(portfolioData, currentPage, PROJECTS_PER_PAGE);
      setupProjectNav();
    }
  };
}

const showProjectsBtn = document.getElementById("show-projects-btn");
if (showProjectsBtn) {
  showProjectsBtn.addEventListener("click", function () {
    document
      .getElementById("projects-section")
      .scrollIntoView({ behavior: "smooth" });
  });
}

setupModalCloseListener();

renderPortfolio(portfolioData, (data) =>
  renderProjects(data, currentPage, PROJECTS_PER_PAGE)
);
setupProjectNav();
