export function getMainTechImages(project) {
  const images = [];
  if (project.techStack?.includes("React")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" title="React" />`
    );
  }
  if (project.techStack?.includes("ASP.NET Core")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" title=".NET" />`
    );
  }
  if (project.techStack?.includes("Blazor")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg" alt="Blazor" title="Blazor" />`
    );
  }
  if (project.techStack?.includes("TypeScript")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" />`
    );
  }
  if (project.techStack?.includes("Angular")) {
    images.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg" alt="Angular" title="Angular" />`
    );
  }
  return `<div class="main-tech-images">${images.join("")}</div>`;
}
