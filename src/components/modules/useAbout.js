import { ref, computed } from 'vue'

const items = [
  {
    label: 'What We Do',
    label_da: 'Hvad Vi Gør',
    label_de: 'Was Wir Tun',
    title: 'What We Do',
    title_da: 'Hvad Vi Gør',
    title_de: 'Was Wir Tun',
    body: 'We are a people-operations consultancy helping organisations build better workplaces. From strategy to execution, we partner with HR and leadership teams to solve the challenges that matter most — attracting talent, improving culture, and building systems that scale.',
    body_da: 'Vi er et konsulentfirma inden for personaleoperationer, der hjælper organisationer med at skabe bedre arbejdspladser. Fra strategi til udførelse samarbejder vi med HR- og ledelsesteams for at løse de udfordringer, der betyder mest - tiltrække talent, forbedre kultur og opbygge systemer, der kan skaleres.',
    body_de: 'Wir sind eine Personalbetriebsberatung, die Organisationen dabei hilft, bessere Arbeitsplätze zu schaffen. Von der Strategie bis zur Umsetzung arbeiten wir mit HR- und Führungsteams zusammen, um die Herausforderungen zu lösen, die am wichtigsten sind - Talente anzuziehen, die Kultur zu verbessern und Systeme aufzubauen, die skalierbar sind.'
  },
  {
    label: 'Talent Attraction, Onboarding And Retention',
    label_da: 'Talenttiltrækning, Onboarding og Fastholdelse',  
    label_de: 'Talente gewinnen, Onboarding und Retention',
    title: 'Talent Attraction, Onboarding & Retention',
    title_da: 'Talenttiltrækning, Onboarding og Fastholdelse',
    title_de: 'Talente gewinnen, Onboarding und Retention',
    body: 'We design end-to-end experiences that draw top-tier candidates, guide them through a seamless onboarding journey, and build loyalty that keeps them engaged for the long run. From employer branding to 90-day integration plans, we help organisations become places people genuinely want to work.',
    body_da: 'Vi designer end-to-end oplevelser, der tiltrækker topkandidater, guider dem gennem en problemfri onboarding-rejse og opbygger loyalitet, der holder dem engagerede på lang sigt. Fra arbejdsgiverbranding til 90-dages integrationsplaner hjælper vi organisationer med at blive steder, hvor folk virkelig gerne vil arbejde.',
    body_de: 'Wir gestalten End-to-End-Erlebnisse, die erstklassige Kandidaten anziehen, sie durch eine nahtlose Onboarding-Reise führen und Loyalität aufbauen, die sie langfristig engagiert hält. Von Employer Branding bis hin zu 90-Tage-Integrationsplänen helfen wir Organisationen dabei, Orte zu werden, an denen Menschen wirklich gerne arbeiten möchten.'
  },
  {
    label: 'How Does Commuting Work',
    label_da: 'Hvordan fungerer pendling',
    label_de: 'Wie funktioniert Pendeln',
    title: 'How Does Commuting Work?',
    title_da: 'Hvordan fungerer pendling',
    title_de: 'Wie funktioniert Pendeln',
    body: 'Our commuting framework maps the real-world friction employees face every day — transit options, flexible scheduling, remote-work policies, and mobility stipends. We benchmark best-in-class practices and craft a commuting strategy that reduces attrition caused by location challenges.',
    body_da: 'Vores pendlerframework kortlægger den virkelige verdens friktion, som medarbejdere står over for hver dag - transportmuligheder, fleksible tidsplaner, politikker for fjernarbejde og mobilitetsstipendier. Vi benchmarker best-in-class praksis og udarbejder en pendlerstrategi, der reducerer frafald forårsaget af lokaliseringsudfordringer.',
    body_de: 'Unser Pendel-Framework kartiert die realen Reibungen, denen Mitarbeiter täglich ausgesetzt sind - Transitoptionen, flexible Arbeitszeiten, Remote-Work-Richtlinien und Mobilitätszuschüsse. Wir benchmarken Best-in-Class-Praktiken und entwickeln eine Pendelstrategie, die die durch Standortprobleme verursachte Fluktuation reduziert.'
  },
  {
    label: 'How Does This Website Work',
    label_da: 'Hvordan fungerer denne hjemmeside',
    label_de: 'Wie funktioniert diese Website',
    title: 'How Does This Website Work?',
    title_da: 'Hvordan fungerer denne hjemmeside',
    title_de: 'Wie funktioniert diese Website',
    body: 'This platform acts as a living knowledge base for HR and people-operations teams. Content is curated by practitioners, updated in real time, and structured around the decisions you actually face. Each section surfaces tools, templates, and case studies you can act on immediately.',
    body_da: 'Denne platform fungerer som en levende vidensbase for HR- og personaleoperationsteams. Indholdet er kurateret af praktikere, opdateres i realtid og struktureres omkring de beslutninger, du faktisk står over for. Hver sektion fremhæver værktøjer, skabeloner og casestudier, som du kan handle på med det samme.',
    body_de: 'Diese Plattform fungiert als lebendige Wissensdatenbank für HR- und Personalbetriebsteams. Inhalte werden von Praktikern kuratiert, in Echtzeit aktualisiert und um die Entscheidungen herum strukturiert, denen Sie tatsächlich gegenüberstehen. Jeder Abschnitt bietet Tools, Vorlagen und Fallstudien, mit denen Sie sofort handeln können.',
  },
]

export function useAbout() {
  const activeIndex = ref(0)
  const active = computed(() => items[activeIndex.value])

  return { items, activeIndex, active }
}