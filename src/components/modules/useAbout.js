import { ref, computed } from 'vue'

const items = [
  {
    label: 'What do we do?',
    label_da: 'Hvad gør vi?',
    label_de: 'Was tun wir?',
    title: 'What do we do?',
    title_da: 'Hvad gør vi?',
    title_de: 'Was tun wir?',
    body: 'We help people and businesses build stronger cross-border careers and companies between Denmark and Germany. Our work covers talent attraction, onboarding, retention, commuting, relocation, and support for people working across the border. We also help with cross-border business, export to Germany, and practical guidance for employees, employers, and companies operating in the Danish-German border region.',
    body_da: 'Vi hjælper mennesker og virksomheder med at opbygge stærkere grænseoverskridende karrierer og virksomheder mellem Danmark og Tyskland. Vores arbejde dækker talenttiltrækning, onboarding, fastholdelse, pendling, relocation og support til personer, der arbejder på tværs af grænsen. Vi hjælper også med grænseoverskridende forretning, eksport til Tyskland og praktisk vejledning for medarbejdere, arbejdsgivere og virksomheder, der opererer i det dansk-tyske grænseområde.',
    body_de: 'Wir helfen Menschen und Unternehmen dabei, stärkere grenzüberschreitende Karrieren und Unternehmen zwischen Dänemark und Deutschland aufzubauen. Unsere Arbeit umfasst Talentgewinnung, Onboarding, Retention, Pendeln, Relocation und Unterstützung für Menschen, die grenzüberschreitend arbeiten. Wir helfen auch bei grenzüberschreitendem Geschäft, Export nach Deutschland und praktischer Anleitung für Mitarbeiter, Arbeitgeber und Unternehmen, die in der deutsch-dänischen Grenzregion tätig sind.',
  },
  {
    label: 'How do you attract, onboard, and retain talent?',
    label_da: 'Hvordan tiltrækker, onboarder og fastholder du talent?',  
    label_de: 'Wie gewinnen, onboarden und binden Sie Talente?',
    title: 'How Do You Attract, Onboard, and Retain Talent?',
    title_da: 'Hvordan tiltrækker, onboarder og fastholder du talent?',
    title_de: 'Wie gewinnen, onboarden und binden Sie Talente?',
    body: 'We help companies attract the right people, create a smooth onboarding process, and build strong retention strategies so employees stay engaged and motivated.',
    body_da: 'Vi hjælper virksomheder med at tiltrække de rigtige mennesker, skabe en smidig onboarding-proces og opbygge stærke fastholdelsesstrategier, så medarbejderne forbliver engagerede og motiverede.',
    body_de: 'Wir helfen Unternehmen dabei, die richtigen Leute anzuziehen, einen reibungslosen Onboarding-Prozess zu schaffen und starke Retentionsstrategien aufzubauen, damit die Mitarbeiter engagiert und motiviert bleiben.',
  },
  {
    label: 'How does commuting work?',
    label_da: 'Hvordan fungerer pendling?',
    label_de: 'Wie funktioniert Pendeln?',
    title: 'How Does Commuting Work?',
    title_da: 'Hvordan fungerer pendling?',
    title_de: 'Wie funktioniert Pendeln?',
    body: 'Commuting depends on where you live and work, but we support people with practical information about cross-border travel, work routines, and the rules that may apply.',
    body_da: 'Pendling afhænger af, hvor du bor og arbejder, men vi støtter folk med praktisk information om grænseoverskridende rejser, arbejdsrutiner og de regler, der kan gælde.',
    body_de: 'Pendeln hängt davon ab, wo du wohnst und arbeitest, aber wir unterstützen Menschen mit praktischer Information über grenzüberschreitende Reisen, Arbeitsabläufe und die Regeln, die gelten können.'
  },
  {
    label: 'How Does This Website Work?',
    label_da: 'Hvordan fungerer denne hjemmeside?',
    label_de: 'Wie funktioniert diese Website?',
    title: 'How Does This Website Work?',
    title_da: 'Hvordan fungerer denne hjemmeside?',
    title_de: 'Wie funktioniert diese Website?',
    body: 'This website helps people and businesses find practical information about working, living, and doing business across the Danish-German border. It brings together guidance and resources on topics like commuting, relocation, talent attraction, onboarding, retention, and cross-border business.',
    body_da: 'Denne hjemmeside hjælper mennesker og virksomheder med at finde praktisk information om at arbejde, bo og drive forretning på tværs af den dansk-tyske grænse. Den samler vejledning og ressourcer om emner som pendling, relocation, talenttiltrækning, onboarding, fastholdelse og grænseoverskridende forretning.',
    body_de: 'Diese Website hilft Menschen und Unternehmen dabei, praktische Informationen über das Arbeiten, Leben und Geschäftemachen über die deutsch-dänische Grenze hinweg zu finden. Sie bringt Anleitungen und Ressourcen zu Themen wie Pendeln',
  },
]

export function useAbout() {
  const activeIndex = ref(0)
  const active = computed(() => items[activeIndex.value])

  return { items, activeIndex, active }
}