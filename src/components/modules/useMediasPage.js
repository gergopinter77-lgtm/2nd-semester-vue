import { ref } from "vue";

export const useMedias = () => {
    const medias = ref ([
    {
        id: 1,
        pictures: "https://i.imgur.com/LzYedxB.jpeg",
        title: "When onboarding becomes a whole",
        title_da: "Når onboarding bliver en helhed",
        title_de: "Wenn das Onboarding zu einem Ganzen wird",
        description: "How do you onboard employees from 19 different nationalities – and ensure that they not only fit in at work, but also in the local community? Andritz Feed & Biofuel has put onboarding high on the agenda and is working purposefully with everything from buddy schemes and leadership training to social and cultural integration. The result is an approach that more companies can take inspiration from – especially if they want to strengthen the recruitment and retention of international workers. How do they do it in practice?",
        description_da: "Hvordan indsætter man medarbejdere fra 19 forskellige nationaliteter – og sikrer, at de ikke kun passer ind på arbejdet, men også i lokalsamfundet? Andritz Feed & Biofuel har sat onboarding højt på dagsordenen og arbejder målrettet med alt fra makkerordninger og ledertræning til social og kulturel integration. Resultatet er en tilgang, som flere virksomheder kan hente inspiration fra – især hvis de ønsker at styrke rekrutteringen og fastholdelsen af ​​internationale medarbejdere. Hvordan gør de det i praksis?",
        description_de: "Wie integrieren Sie Mitarbeiter aus 19 verschiedenen Nationalitäten – und stellen sicher, dass sie nicht nur am Arbeitsplatz, sondern auch in die lokale Gemeinschaft passen? Andritz Feed & Biofuel hat dem Onboarding einen hohen Stellenwert eingeräumt und arbeitet zielgerichtet an allen Themen, von Buddy-Programmen und Führungstraining bis hin zur sozialen und kulturellen Integration. Das Ergebnis ist ein Ansatz, von dem sich mehr Unternehmen inspirieren lassen können – insbesondere, wenn sie die Rekrutierung und Bindung internationaler Arbeitskräfte stärken wollen. Wie machen sie es in der Praxis?",
        category: "technology",
        slug: "when-onboarding-becomes-a-whole"
    },
    {
        id: 2,
        pictures: "https://i.imgur.com/69Kd18c.jpeg",
        title: "From foreigner to integrated",
        title_da: "Fra udlænding til integreret",
        title_de: "Vom Ausländer zum Integrierten",
        description: "Integration requires more than a job – it requires networks and language. Getting support for language learning, meeting new people both in and outside the workplace, and having access to local networking groups helps foreign employees feel at home faster.",
        description_da: "Integration kræver mere end et job – det kræver netværk og sprog. At få støtte til sprogindlæring, møde nye mennesker både på og uden for arbejdspladsen og have adgang til lokale netværksgrupper hjælper udenlandske medarbejdere til at føle sig hjemme hurtigere.",
        description_de: "Integration erfordert mehr als einen Job – sie erfordert Netzwerke und Sprache. Wenn Sie beim Sprachenlernen Unterstützung erhalten, neue Leute innerhalb und außerhalb des Arbeitsplatzes kennenlernen und Zugang zu lokalen Netzwerkgruppen haben, fühlen sich ausländische Mitarbeiter schneller zu Hause.",
        category: "business",
        slug: "from-foreigner-to-integrated"
    },
    {
        id: 3,
        pictures: "https://i.imgur.com/N2NNLiB.jpeg",
        title: "See the interview with Gwyn Nissen",
        title_da: "Se interviewet med Gwyn Nissen",
        title_de: "Sehen Sie sich das Interview mit Gwyn Nissen an",
        description: "Today, there are many players — municipalities, business councils, real estate agents, minority organizations, etc. — but no common, unified entrance. This means that families easily get lost between NemID, housing hunting, jobs, language, and integration.",
        description_da: "I dag er der mange aktører - kommuner, erhvervsråd, ejendomsmæglere, minoritetsorganisationer osv. - men ingen fælles, samlet indgang. Det betyder, at familier let farer vild mellem NemID, boligjagt, job, sprog og integration.",
        description_de: "Heutzutage gibt es viele Akteure – Kommunen, Unternehmensräte, Immobilienmakler, Minderheitenorganisationen usw. –, aber keinen gemeinsamen, einheitlichen Eingang. Das bedeutet, dass sich Familien zwischen NemID, Wohnungssuche, Jobs, Sprache und Integration leicht verlieren.",
        category: "politics",
        slug: "see-the-interview-with-gwyn-nissen"
    },
    {
        id: 4,
        pictures: "https://i.imgur.com/0D8ztvS.jpeg",
        title: "Business DE-DK ​​borderless cooperation",
        title_da: "Erhverv DE-DK ​​grænseløst samarbejde",
        title_de: "Business DE-DK ​​grænseløst samarbejde",
        description: "Business DE-DK ​​creates platforms for learning and exchange of experiences across countries. We visit best practices, are inspired by existing solutions and facilitate dialogue between companies, politicians and organizations. Through workshops, network meetings and online solutions, we bring stakeholders together to develop concrete, cross-border initiatives.",
        description_da: "Business DE-DK ​​skaber platforme for læring og udveksling af erfaringer på tværs af lande. Vi besøger best practices, lader os inspirere af eksisterende løsninger og faciliterer dialog mellem virksomheder, politikere og organisationer. Gennem workshops, netværksmøder og onlineløsninger bringer vi interessenter sammen for at udvikle konkrete, grænseoverskridende initiativer.",
        description_de: "Business DE-DK ​​schafft länderübergreifende Plattformen zum Lernen und Erfahrungsaustausch. Wir besuchen Best Practices, lassen uns von bestehenden Lösungen inspirieren und ermöglichen den Dialog zwischen Unternehmen, Politik und Organisationen. Durch Workshops, Netzwerktreffen und Online-Lösungen bringen wir Stakeholder zusammen, um konkrete, grenzüberschreitende Initiativen zu entwickeln.",
        category: "science",
        slug: "business-de-dk-borderless-cooperation"
    },
    {
        id: 5,
        pictures: "https://i.imgur.com/rs8QcbG.jpeg",
        title: "Business director at Tønder Business Council",
        title_da: "Erhvervsdirektør i Tønder Erhvervsråd",
        title_de: "Geschäftsführer des Tønder Business Council",
        description: "Peter Engel, business director at Tønder Business Council, explains the importance of cross-border cooperation between Denmark and Germany. With over 300 member companies, the business council focuses on supporting urban business sectors and promoting projects that create networks between companies on both sides of the border.",
        description_da: "Peter Engel, erhvervsdirektør i Tønder Erhvervsråd, forklarer vigtigheden af ​​det grænseoverskridende samarbejde mellem Danmark og Tyskland. Med over 300 medlemsvirksomheder har erhvervsrådet fokus på at støtte byerhvervssektorer og fremme projekter, der skaber netværk mellem virksomheder på begge sider af grænsen.",
        description_de: "Peter Engel, Geschäftsführer des Tønder Business Council, erklärt die Bedeutung der grenzüberschreitenden Zusammenarbeit zwischen Dänemark und Deutschland. Mit über 300 Mitgliedsunternehmen konzentriert sich der Wirtschaftsrat auf die Unterstützung städtischer Wirtschaftssektoren und die Förderung von Projekten, die Netzwerke zwischen Unternehmen auf beiden Seiten der Grenze schaffen.",
        category: "politics",
        slug: "business-director-at-tønder-business-council"
    },
    {
        id: 6,
        pictures: "https://i.imgur.com/vVDWNeF.jpeg",
        title: "Work Live Stay",
        title_da: "Arbejde Live Ophold",
        title_de: "Arbeiten, leben, bleiben",
        description: "How can companies best prepare to welcome their first international employees? Gitte-Gram Davidsen from Work Live Stay shares experiences about local networks, the Botschafternetzværk, and the importance of targeted support for companies. Learn how we create strong local structures for welcome and integration, and why it is crucial to prioritize time and resources to ensure long-term growth in the region.",
        description_da: "Hvordan kan virksomheder bedst forberede sig på at byde deres første internationale medarbejdere velkommen? Gitte-Gram Davidsen fra Work Live Stay deler erfaringer om lokale netværk, Botschafternetzværket og vigtigheden af ​​målrettet støtte til virksomheder. Lær, hvordan vi skaber stærke lokale strukturer for velkomst og integration, og hvorfor det er afgørende at prioritere tid og ressourcer for at sikre langsigtet vækst i regionen.",
        description_de: "Wie können sich Unternehmen am besten auf die Aufnahme ihrer ersten internationalen Mitarbeiter vorbereiten? Gitte-Gram Davidsen von Work Live Stay teilt Erfahrungen über lokale Netzwerke, das Botschafternetzværk und die Bedeutung gezielter Unterstützung für Unternehmen. Erfahren Sie, wie wir starke lokale Strukturen für die Aufnahme und Integration schaffen und warum es wichtig ist, Zeit und Ressourcen zu priorisieren, um ein langfristiges Wachstum in der Region sicherzustellen.",
        category: "technology",
        slug: "what-opportunities-and-what-challenges"
    },
    ]);
    return {
        medias
        }
}

