
export function openAboutModal(longAboutText) {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  // Dölj contact-elementet endast i mobilvy
  if (window.innerWidth <= 700) {
    const contactElement = document.getElementById("contact-mobile");
    if (contactElement) {
      contactElement.style.display = "none";
    }
  }

  modal.innerHTML = `
    <div class="about-modal-content">
      <button class="close-modal-btn" aria-label="Stäng">&times;</button>
      <h2>Mer om mig</h2>
      <p>${formatTextWithParagraphs(longAboutText)}</p>
    </div>
  `;
  modal.querySelector(".close-modal-btn").addEventListener("click", closeModal);
}

export function openProjectModal(project) {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  // Dölj contact-elementet endast i mobilvy
  if (window.innerWidth <= 700) {
    const contactElement = document.getElementById("contact-mobile");
    if (contactElement) {
      contactElement.style.display = "none";
    }
  }

  let modalContent = `
    <div class="project-modal-content">
      <button class="close-modal-btn" aria-label="Stäng">&times;</button>
      <h2>${project.title}</h2>
      <div class="project-detail-section">
        <h3>Teknik</h3>
        <p>${project.techStack}</p>
      </div>
      <div class="project-detail-section">
        <h3>Beskrivning</h3>
        <div>${formatTextWithParagraphs(project.longDescription)}</div>
      </div>
      <div class="project-links"></div>
    </div>
  `;

  modal.innerHTML = modalContent;

  // Lägg till länkar
  const linksDiv = modal.querySelector(".project-links");
  if (project.links && project.links.length > 0) {
    const linksHeader = document.createElement("h3");
    linksHeader.textContent = "Länkar";
    linksDiv.appendChild(linksHeader);

    project.links.forEach((link) => {
      const div = document.createElement("div");
      const a = document.createElement("a");
      a.href = link.url;
      a.innerText = link.name;
      a.target = "_blank";
      div.appendChild(a);
      linksDiv.appendChild(div);
    });
  }

  modal.querySelector(".close-modal-btn").addEventListener("click", closeModal);
}

export function closeModal() {
  document.getElementById("modal").style.display = "none";

  // Visa contact-elementet igen endast i mobilvy
  if (window.innerWidth <= 700) {
    const contactElement = document.getElementById("contact-mobile");
    if (contactElement) {
      contactElement.style.display = "block";
    }
  }
}

export function setupModalCloseListener() {
  const modal = document.getElementById("modal");
  modal.addEventListener("click", function (event) {
    if (event.target === this) {
      closeModal();
    }
  });
}

function formatTextWithParagraphs(text) {
  if (!text) return "";

  return text
    .split("\n\n") // Dela vid dubbla radbrytningar
    .filter((paragraph) => paragraph.trim()) // Ta bort tomma stycken
    .map((paragraph) => `<p>${paragraph.trim()}</p>`) // Wrappa i <p>-taggar
    .join("");
}
