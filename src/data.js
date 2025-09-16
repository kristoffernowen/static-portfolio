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

/* const oldAbout = `Jag bygger moderna webbapplikationer med .NET och JavaScript.
  Jag har min bakgrund inom humaniora och socialt arbete, vilket ger mig
  en god förmåga att förstå många perspektiv och behov. Det har också lärt 
  mig en hel del om kommunikation och samarbete. Jag är nyfiken och lär mig
  snabbt nya saker. Jag trivs i team och tycker om att samarbeta för att 
  hitta de bästa lösningarna.`; */

const about = `Med bakgrund inom humaniora och socialt arbete och kärlek för både det
praktiskt enkla och det mångfacetterade, bygger jag moderna webbapplikationer med .NET och
JavaScript.`;

const portfolioData = {
  name: "Kristoffer Nowen",
  title: "Systemutvecklare .NET",
  about: about,
  projects: [
    new Project(
      "Status på tjänster - uppdrag hos Contrl",
      "ASP.NET Core Web API, Entity Framework Core, MySQL, React, TypeScript, " +
        "xUnit, CI/CD via GitHub, Azure, HTML Agility Pack",
      `Ett internt verktyg för att övervaka status på kunders tjänster. Jag byggde det
      under ett uppdrag hos Contrl i Örebro.`,
      `Jag blev ombedd att bygga en enkel applikation för att övervaka status på deras
      underleverantörers tjänster. Det är ett api som har en background service som läser 
      av status för tjänsterna och sparar resultatet i en MySQL databas med Entity Framework 
      Core. För frontend använde jag React med Typescript. Status blir avläst med intervaller 
      och visas i en tabell. Det gick även att anmäla sig till epost notifikation om en tjänst
      hade störningar.`
    ),
    new Project(
      "Inlärningsapp - hobbyprojekt",
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
      "Feedback App - LIA hos Dugga",
      "ASP.NET Core Web API, Entity Framework Core, PostgreSQL, Angular, TypeScript",
      `En prototyp för att låta användare lämna feedback på Duggas produkt. Jag byggde den 
      under min första LIA, remote, hos Dugga i Stockholm.`,
      `Jag byggde ett ASP.NET Core Web API med Entity Framework Core för att spara data i en
      PostgreSQL databas. För frontenden använde jag Angular med TypeScript för att skapa en
      interaktiv användarupplevelse. Jag lärde mig mycket om webbutveckling i praktiken.`
    ),
    new Project(
      "CV Maker - hobbyprojekt",
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
    new Project(
      "Budgivarprototyp - LIA hos Contrl AB",
      "ASP.NET Core Web API, Entity Framework Core, MySQL, React",
      `En prototyp för att hantera offerter. Jag byggde den under min andra LIA på plats hos Contrl i Örebro.`,
      `Jag var ombedd att bygga en protyp som skulle ge företag möjlighet att lägga in ordrar i ett
      system för att sedan få in offertar från leverantörer, för att få en god överblick och samlad
      hantering. Jag byggde ett ASP.NET Core Web API med Entity Framework Core för att spara data i en
      MySQL databas. APIet organiserades i en enlare Clean Architecture och hade autentisering med JWT 
      och loggning med Serilog. För frontend använde jag React. Mestadels kretsade det kring en
      tabellkomponent. Företag fick skapa ordrar och speca upp vad de ville ha, när och hur mycket.
      Leverantörer kunde sedan lägga in sina offertar med bud på pris och levereranstid per rad.`
    ),
    new Project(
      "Grammatikapp - hobbyprojekt",
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
  ],
  contact: {
    email: "kristoffer.nowen@gmail.com",
    linkedin: "https://linkedin.com/in/kristoffernowen",
    github: "https://github.com/kristoffernowen",
  },
};
