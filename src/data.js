class Project {
  constructor({ title, techStack, shortDescription, longDescription, links }) {
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

const about = `Med bakgrund inom humaniora och socialt arbete och kärlek för både det
praktiskt enkla och det mångfacetterade, bygger jag moderna webbapplikationer med .NET och
JavaScript.`;

const longAbout = `Jag har tagit väldigt starkt intryck av Robert Martins böcker om att planera för förändring och Dave Farleys samtal om att ”Software is about managing complexity”. Jag har också hunnit uppleva att avancerade strategier för att hantera förändring är i vägen om de kommer för tidigt. Bäst kanske är att vara väldigt klar över sin idé, hålla delarna avgränsade på konceptnivå och se till att man täcker det som behövs nu men inte målar in sig för mycket. Sedan kan bra tester ge en trygghet att våga bygga ut.

Jag har alltid tyckt idéer och koncept och hur de interagerar är spännande, både logiskt, semantiskt och faktiskt i verkliga livet när reglerna inte räcker till. Jag tror jag har min starkaste sida i programmering i att kunna hantera komplicerad affärslogik och göra om den till kod. Jag är inte väldigt tekniskt kunnig från början men jag har upptäckt att det är vansinnigt roligt att lära sig nya tekniker.

Jag har min bakgrund i humaniora, med latin och sanskrit, och socialt arbete. Det har lärt mig mycket om kommunikation i olika språk och kontexter, samarbete och verkliga behov. Mina programmeringsfärdigheter kommer främst från min tvååriga .NET yrkeshögskoleutbildning, egna efterforskningar därefter och projekt där jag försökt utforska nya koncept och tekniker. Jag ser fram emot att bidra med nyanserade tankar om affärslogik och iterativ, utforskande men defensiv mjukvaruutveckling.
`;

const portfolioData = {
  name: "Kristoffer Nowen",
  title: "Systemutvecklare .NET",
  about: about,
  longAbout: longAbout,
  projects: [
    // Uppdatera "Status på tjänster - uppdrag hos Contrl" projektet:
    new Project({
      title: "ContrlStatusChecker - uppdrag hos Contrl AB",
      techStack:
        "React, TypeScript, .NET 8, ASP.NET Core Web API, Entity Framework Core, Clean Architecture, HtmlAgilityPack, Serilog, xUnit, Azure, CI/CD via GitHub",
      shortDescription: `Ett automatiserat övervakningssystem som kontinuerligt kontrollerar driftsstatus hos viktiga svenska finansiella tjänsteleverantörer (BankID, Swish, Nets, Kivra, m.fl.) och skickar e-postnotifieringar vid störningar.`,
      longDescription: `Contrl ville ha en prof-of-concept app som kunde övervaka driftstatus på sina underleverantörers tjänster och presentera detta på en sida samt möjliggöra e-postprenumerationer vid störningar. Detta för att själva få en överblick och låta deras kunder snabbt se om det fanns externa störningar bortom Contrls kontroll.

Jag byggde en service som producerar störningsrapporter genom att kombinera webscraping och API-anrop mot olika leverantörer. Denna kördes som en background service med konfigurerbara intervall för att kontinuerligt uppdatera driftstatus och skicka e-postnotifieringar vid störningar.

Arkitekturen är byggd med Clean Architecture och strategimönster (strategy pattern) där varje leverantör har sin egen subklass för webscraping. Detta gör det enkelt att justera eller byta strategi när leverantörer ändrar sina webbsidor, utan att påverka resten av systemet. De flesta testerna är skrivna runt det.

Resultatet blev ett komplett API som uppdaterar driftstatus, presenterar den via en React-frontend och hanterar e-postprenumerationer på störningar.
`,
    }),
    new Project({
      title: "Grammatikapp - hobbyprojekt",
      techStack:
        "ASP.NET Core 10 Web Api, Entity Framework Core, Clean Architecture, CQRS med MediatR, xUnit med Moq, React",
      shortDescription: `En app för att träna svensk grammatik med fokus på ordföljd och tempus. Byggd utifrån min erfarenhet av att undervisa invandrare - visade sig vara väldigt krävande att få robust.`,
      longDescription: `Övningsprojekt istället för todo app. Jag har undervisat invandrare i svenska och såg att man kunde skapa träningsverktyg för vissa enkla grammatiska regler, där man kan toggla mellan alternativ och se hur de fungerar.

Ursprungligen byggt med .NET 7, ett API, en Blazor WebAssembly klient och SQL Server databas.

Uppdaterat med .NET 10. Jag bytte till en Copilot byggd React klient och en Sqlite databas för att lättare publicera en demo på Azure och GitHub Pages. Det är gratis API på Azure, så kan starta väldigt segt och jag hade problem med att få det stabilt med Sqlite.

Några av exemplen lyckas inte tillämpa korrekta grammatiska böjningar, men annars visar den exemplet jag jobbade med - att byta ordföljd för frågor eller påståenden, ändra numerus och bestämdhet samt visa tempus på en kort mening med subjekt och predikat. 

Den gamla logiken jag jobbade med litade på olika Service som proceduriskt anpassade meningen, som i en pipeline. Den var väldigt svår att gå vidare med. Dessutom har jag använt onödigt krångliga saker, för att få träna. Jag har påbörjat att arbeta mer domändrivet med rika modeller i APIet. Det skapar mer flexibilitet och enklare logik att bygga fler use cases och meningsexempel. Får se om jag fortsätter här eller i en helt egen version.`,
      links: [
        new Link(
          "Live Demo",
          "https://kristoffernowen.github.io/copilot-language-react/",
        ),
        new Link(
          "Github backend repo",
          "https://github.com/kristoffernowen/LanguageSkeleton",
        ),
        new Link(
          "Github frontend repo",
          "https://github.com/kristoffernowen/copilot-language-react",
        ),
      ],
    }),
    new Project({
      title: "JobAssistant - AI-assisterat hobbyprojekt",
      techStack:
        "ASP.NET Core 10 Web API, Entity Framework Core, SQL Server, Vertical Slice Architecture, FluentValidation, xUnit, AI-assisterad utveckling (agent-driven workflow), integrationer mot Arbetsförmedlingens API:er",
      shortDescription:
        "Ett .NET-baserat API för jobbsökning som hämtar och filtrerar platsannonser från externa källor. Projektet är byggt genom AI-samarbete där jag nästan uteslutande arbetat med krav, instruktioner, granskning och iteration mot en kodagent.",
      longDescription:
        "Detta projekt är medvetet genomfört som AI-assisterad engineering: jag har primärt jobbat med att styra implementationen via tydliga instruktioner till en agent, snarare än traditionell manuell kodning rad för rad.\n\n" +
        "Mitt fokus har varit att bryta ner problem, formulera exakta krav, sätta arkitekturella ramar, iterera på endpoint-kontrakt och valideringsregler, samt kvalitetssäkra resultat med tester och dokumentation.\n\n" +
        "Rent funktionellt innehåller lösningen både stateless sökflöde och sessionsbaserad refine-logik mot externa jobb-API:er, med konsekvent felhantering (ProblemDetails), tydliga domänregler och testbar struktur enligt vertical slice-principer.\n\n" +
        "Metoder jag övat och använt i praktiken:\n" +
        "- prompt-driven kravspecifikation och stegvis leveransstyrning\n" +
        "- beslutsspårning med ADR och uppdelning mellan instruktion, beslut och implementation\n" +
        "- iterativ verifiering med test-feedback och refaktorering\n" +
        "- dokumentation för spårbarhet: planering, instruktioner, implementeringsresultat och loggar\n\n" +
        "Projektet visar därför både backendkompetens i .NET och praktisk förmåga att leda AI-stödd utveckling på ett strukturerat och reproducerbart sätt.",
      links: [
        new Link(
          "GitHub repo",
          "https://github.com/kristoffernowen/JobAssistant",
        ),
        new Link(
          "Projektets dokumentation",
          "https://github.com/kristoffernowen/JobAssistant/tree/main/docs",
        ),
      ],
    }),
    new Project({
      title: "Inlärningsapp - hobbyprojekt",
      techStack:
        "React, TypeScript, ASP.NET Core Web API, Entity Framework Core, MS SQL, " +
        "TDD inspirerad, Azure, CI/CD via GitHub, Clean Architecture, CQRS",
      shortDescription: `En webbapp för att träna fakta-inlärning där användare skapar egna övningar. Byggd för att utforska Clean Architecture, CQRS och TDD - så här i efterhand hade jag nog försökt enklare.`,
      longDescription: `Jag fick förslag på att bygga ett system som assisterar inlärning av fakta. Parallellt ville jag träna på några kodkoncept – flexibla formulär, Clean Architecture, CQRS och TDD.

Jag byggde ett API med Clean Architecture och CQRS som låter användare först skapa en modell som sedan används för att skapa övningsobjekt med frågor och svar. Det kan till exempel vara ett land med egenskaperna namn, huvudstad och folkmängd. API:et servar sedan övningen till klienten för att visa frågorna, ta emot svar och returnera dessa för rättning.

React-klienten låter användaren skapa övningar och välja från en lista vilken som ska genomföras. Det krävde en hel del useState-hantering och komponentstrukturering för att få formulären att fungera smidigt.

Resultatet är en sida jag hostar på Azure där användare kan skapa övningar, hantera dem och genomföra valfri övning med direkt feedback. Det finns många förbättringsmöjligheter i både frontend och backend. Största problemet var att jag använde rigida modeller i backend som utgick från att man alltid skapar övningar med objekt som i sin tur innehåller flera frågor. Det gjorde det svårt att bygga funktionalitet där man kanske vill återanvända frågor i andra övningar, eller ha objekt med varierande antal frågor. Eftersom det är ett hobby- och övningsprojekt har jag inte riktigt bestämt mig för om det är värt att refaktorera eller börja om från scratch. Grundfunktionaliteten fungerar bra men UI:t behöver definitivt ett lyft.
`,

      links: [
        new Link(
          "GitHub API Repo",
          "https://github.com/kristoffernowen/Learner",
        ),
        new Link(
          "Live Demo",
          "https://yellow-river-0d64e4110.5.azurestaticapps.net",
        ),
        new Link(
          "Github Client Repo",
          "https://github.com/kristoffernowen/learner_react_frontend",
        ),
      ],
    }),
    new Project({
      title: "Dugga Feedback Portal - LIA hos Dugga",
      techStack:
        "C#, ASP.NET Core 6, Entity Framework Core, PostgreSQL, MediatR, CQRS, AutoMapper, Swagger/OpenAPI, Angular, TypeScript",
      shortDescription: `En prototyp för feedbacksystem som låter kunder lämna idéer och rösta på redan inlämnade förslag. Byggd under min första LIA med Daily standups och Azure DevOps.`,
      longDescription: `Under min första LIA var jag hos Dugga i sex veckor. De ville ha en prototyp för en feedbackportal där kunder kunde lämna nya idéer och rösta på befintliga förslag.

Utifrån kraven designade och byggde jag portalen genom att dela upp arbetet i Backlog items i Azure DevOps och delta i Daily standups med ett av teamen. API:et tar emot nya idéer från kunder och låter Dugga bearbeta dessa - slå ihop liknande förslag och sätta status på dem. Dessa bearbetade idéer presenteras sedan för användare som kan rösta på hur viktiga de tycker att förslagen är.

Det var mitt första projekt med Clean Architecture och jag implementerade en enklare indelning där Core-lagret separeras från presentation och lagring. Frontend byggdes med Angular och tillhandahåller formulär för kunder att lämna idéer och rösta, samt för Dugga att bearbeta dessa idéer.

Resultatet var en fullt fungerande prototyp som jag kunde demonstrera för Dugga efter avslutad LIA med all efterfrågad funktionalitet.
`,
    }),
    new Project({
      title: "CV Maker - hobbyprojekt",
      techStack:
        ".NET 9, ASP.NET Core MVC och API, Entity Framework Core, MS SQL, Blazor",
      shortDescription: `En prototyp för att skapa CV som PDF från HTML-mallar. Tröttnade på Word och ville ha mer kontroll - plus bra träning i PDF-generering och mallhantering.`,
      longDescription: `Jag tyckte att det skulle vara bra övning att skriva en app som kan bygga ett CV i PDF utifrån HTML. Bra övning för mig samt potentiellt möjligt att få bättre kontroll och frihet än jag har i Words och färdiga mallar. Jag provade AI baserad CV mall via fackförbundet, men jag tycker den saknade frihet och tillförlitlighet. 

Innan detta hade jag byggt ett ASP.NET Core MVC som konverterade en view till PDF. Nu ville jag utforska om jag kunde skapa mina mallar och PDF i ett API och skicka de till valfri klient. För att slippa så mycket jobb med steget med data till CV använde jag ett MVC projekt med scaffoldade Razor Pages och Controllers för CRUD av CV data. Sedan byggde jag mitt API med typ Clean Architecture (och ett märklig Shared class library project för att sy ihop med MVC delen) och ett Blazor UI för att hantera att en användare skapar en CV profil utifrån vald CV data och väljer bland tillgängliga mallar, förhandsgranskar och exporterar PDF.

Jag utgick från Razor Light biblioteket för att hantera mina första templates som partial.cshtml
 som kunde sättas ihop till ett fullt CV i en main.cshtml som jag med Select.HtmlToPdf konverterade 
 till en PDF. Det fungerade bra men jag ville gå vidare med ett modernare bibliotek och påbörjade en 
 annan implementering där tanken är att använda Scriban för att bygga mindre delar i CV och sedan 
 Html Agility pack för att bygga ihop de till en fil att konvertera till PDF. De lever just nu i 
 varsin branch i Git som implementeringar av en IPdfTemplateEngine. 
 

Jag har nu upptäckt att det finns bra 
val för razor pages i mitt scenario med Razor.Templating.Core som jag inte sett förut. Detta projekt har mest
varit att prova på, men det påminner om  att det är viktigt att undersöka tillgängliga alternativ innan man
börjar bygga. I det här fallet har jag varit lite okritisk mot AIs förslag och gått vidare med dem utan att
efterforska alternativen.

Resultatet är en prototyp som kan skapa användare, samla data för CV och skapa olika CV utifrån vald profil och mall samt exportera detta som PDF. Det saknas en hel del logik för att säkerställa att CV alltid renderas korrekt oberoende av input till t ex arbetserfarenhet och utbildningar, men det hanterar en del fall väl och tillåter olika profiler och mallar. Det har varit väldigt lärorikt men visar också vilket stort jobb en del små detaljer kräver om de ska fungera robust.
`,
      links: [
        new Link("Github Repo", "https://github.com/kristoffernowen/JobExp"),
      ],
    }),
    new Project({
      title: "SupplierPortal - LIA hos Contrl AB",
      techStack:
        ".NET 7, ASP.NET Core Web API med Identity och JWT, Entity Framework Core med MySQL, React med Material-UI och Axios",
      shortDescription: `En B2B-prototyp för anbudsprocesser mellan köpare och leverantörer. Digitaliserar flödet från orderläggning till utvärdering.`,
      longDescription: `Jag gjorde min andra LIA under utbildningen hos Contrl som servar bl a hustillverkare och fastighetsförvaltare. De bad mig utveckla en B2B prototyp för att hantera anbudsprocesser mellan köpare och leverantörer. Systemet digitaliserar hela processen från orderläggning till anbudsinlämning och utvärdering.

Det är byggt med ett REST API med grundläggande separation mellan lagren och en React klient. Eftersom det krävdes många modeller med många relationer var det väldigt skönt att kunna jobba med generiska repositories. Klient delen kretsar mycket kring en dynamisk tabell som först används för att låta köpare överblicka vilka ordrar, med detaljer, de vill ha bud på. Leverantörer kan sedan välja ordrar från lista, granska detaljer och i tabellen fylla på vilka priser och leveranstider de kan erbjuda. Köparna kan sedan se vilka kostnadsförslag som lagts på deras ordrar och status följas. 

Resultatet blev en prototyp som med inloggning av användare och hantering av roller låter de följa ordrar och anbudsförslag på dessa. 
`,
    }),
  ],
  contact: {
    email: "kristoffer.nowen@gmail.com",
    linkedin: "https://linkedin.com/in/kristoffernowen",
    github: "https://github.com/kristoffernowen",
  },
};

export { portfolioData, Project, Link };
