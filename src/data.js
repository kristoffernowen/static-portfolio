class Project {
  constructor(title, techStack, shortDescription, longDescription, links) {
    this.title = title;
    this.techStack = techStack;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.links = links;
  }
}

class Link {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

const portfolioData = {
  name: "Kristoffer Nowen",
  title: "Systemutvecklare .NET",
  about: `Jag bygger moderna webbapplikationer med .NET och JavaScript.
  Jag har min bakgrund inom humaniora och socialt arbete, vilket ger mig
  en god förmåga att förstå många perspektiv och behov. Det har också lärt 
  mig en hel del om kommunikation och samarbete. Jag är nyfiken och lär mig
  snabbt nya saker. Jag trivs i team och tycker om att samarbeta för att 
  hitta de bästa lösningarna.`,
  projects: [
    new Project(
      "Inlärningsapp",
      "React, TypeScript, ASP.NET Core Web API, Entity Framework Core, MS SQL, " +
        "TDD inspirerad, Azure, CI/CD via GitHub, Clean Architecture, CQRS",
      `En webbapplikation för att lära in namn och fakta. Så här i efterhand
      hade jag nog försökt enklare, men det var ett mål att träna på teknik 
      lika mycket som att skapa appen. `,
      `Jag har byggt en React frontend med TypeScript som anropar ett ASP.NET Core Web API.
      APIet använder Entity Framework Core för att spara data i en MS SQL databas.
      Jag har försökt följa principer från Clean Architecture och CQRS. Jag har 
      också försökt skriva tester för att träna på TDD, även om jag inte alltid
      lyckats hålla mig strikt till TDD. Jag har använt GitHub för versionshantering
      och satt upp CI/CD för att automatiskt bygga och deploya applikationen till
      Azure när jag gör ändringar i main branchen. Jag har lärt mig mycket om 
      modern webbutveckling och molntjänster genom att bygga denna applikation.`,
      [
        new Link(
          "GitHub API Repo",
          "https://github.com/kristoffernowen/Learner"
        ),
        new Link("Live Demo", "https://www.koffepages.se"),
        new Link(
          "Github Client Repo",
          "https://github.com/kristoffernowen/learner_react_frontend"
        ),
      ]
    ),
    new Project(
      "Grammatikapp",
      "ASP.NET Core Web Api, Entity Framework Core, MS SQL, Clean Architecture," +
        " Blazor.",
      `Jag har tidigare undervisat invandrare i svenska. Detta är ett tidigt försök
         att skapa en app för att kunna träna grundläggande svensk grammatik, t ex ordföljd.
         De use case jag utgått från är att kunna välja ord i en kort mening för att sedan
         se hur olika tempus påverkar samt om det är ett påstående eller en fråga.
         `,
      `Jag har byggt ett ASP.NET Core Web API med Entity Framework Core för att spara data i en
      MS SQL databas. Jag har försökt följa principer från Clean Architecture. För frontenden
      har jag använt Blazor för att skapa en interaktiv användarupplevelse. Jag har lärt mig
      mycket om webbutveckling`,
      [
        new Link(
          "Github Repo",
          "https://github.com/kristoffernowen/LanguageSkeleton"
        ),
      ]
    ),
    new Project(
      "CV Maker",
      "ASP.NET Core MVC, API, Entity Framework Core, MS SQL, Blazor",
      `En webbapplikation för att skapa CV och personligt brev. Jag tröttnade på
      att skapa CV i Word och tänkte att det vore bra träning att bygga med HTML
      och konvertera till PDF.`,
      `Det är en prototyp med MVC genererade CRUD vyer för att spara tid. Sedan har jag byggt 
      ett api för att välja vilka erfarenheter 
      etc som ska ingå i CVet och en Blazor frontend för att anropa APIet. Mitt första
      försök var en MVC som konverterade vyn till pdf men jag tyckte det skulle vara 
      lärorikare att bygga med Blazor och API. Just nu har jag en branch som använder
      RazorLight för att generera PDF från en Razor vy, men eftersom RazorLight är gammalt
      tänker jag gå vidare med Scriban och HTML agility pack för att bygga HTML som sedan
      görs till en string och blir PDF. I och med att det är en prototyp har jag inte
      lagt så mycket tid på designen.`,
      [new Link("Github Repo", "https://github.com/kristoffernowen/JobExp")]
    ),
  ],
  contact: {
    email: "kalle@example.com",
    linkedin: "https://linkedin.com/in/kalle",
    github: "https://github.com/kalle",
  },
};
