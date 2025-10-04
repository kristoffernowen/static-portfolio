export function openAboutModal(aboutText) {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.innerHTML = `
    <div class="about-modal-content">
      <button class="close-modal-btn" aria-label="Stäng">&times;</button>
      <h2>Mer om mig</h2>
      <p>${aboutText}</p>
    </div>
  `;
  modal.querySelector(".close-modal-btn").addEventListener("click", closeModal);
}

export function openProjectModal(project) {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.innerHTML = `
    <div class="project-modal-content">
      <button class="close-modal-btn" aria-label="Stäng">&times;</button>
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
      linksDiv.appendChild(document.createTextNode(" "));
    });
  }
  modal.querySelector(".close-modal-btn").addEventListener("click", closeModal);
}

export function closeModal() {
  document.getElementById("modal").style.display = "none";
}

export function setupModalCloseListener() {
  const modal = document.getElementById("modal");
  modal.addEventListener("click", function (event) {
    if (event.target === this) {
      closeModal();
    }
  });
}
