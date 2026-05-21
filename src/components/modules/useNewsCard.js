import { ref } from "vue";

export const useNewsCard = () => {
const newsCards = ref ([
    {
      id: 1,
      image: "https://i.imgur.com/AXmyIBs.jpeg",  
      title: "Southern Denmark’s Supercomputer Boost",
      description: "Southern Denmark is making a notable push in advanced computing with the launch of a new AI supercomputer in Sønderborg. The system gives researchers significantly more processing power for data-heavy work such as artificial intelligence, simulation, and complex analysis, which can support both academic research and industrial innovation. The project is especially relevant for business readers because it reflects how regional institutions and major companies like Danfoss are investing in digital infrastructure that can improve competitiveness, energy efficiency, and product development. It also strengthens Southern Denmark’s position as a region where research and industry are closely linked.",
      category: "technology",
      slug: "southern-denmark-supercomputer-boost",
    },
    {
      id: 2,
      image: "https://i.imgur.com/a8vTGvb.jpeg",  
      title: "Germany’s Business Pressure Grows",
      description: "Germany’s business community is continuing to pressure Berlin for faster and more credible economic reforms. The core complaint is that companies are still facing too much uncertainty, high operating costs, and too little momentum on issues such as energy policy, digitalization, tax reform, and labor market flexibility. For a business audience, this story matters because it signals that confidence in Europe’s largest economy remains fragile, even as companies try to plan investment and hiring decisions. The broader message is that the private sector wants the government to act quickly before weak growth becomes more entrenched.",
      category: "business",
      slug: "germany-business-pressure-grows",
    },
    {
      id: 3,
      image: "https://i.imgur.com/gCVYFp2.jpeg",  
      title: "Odense Health Innovation Day",
      description: "Health Innovation Day 2026 at SDU in Odense is shaping up as an important meeting point for researchers, healthcare professionals, companies, and public-sector partners. The event’s focus is on turning health research into practical solutions, which makes it especially relevant for businesses working in medtech, diagnostics, digital health, and life sciences. It also reflects a broader regional effort to connect universities and industry more effectively so that ideas move faster from concept to implementation. For a business site, the most important angle is the opportunity: this is where partnerships, funding, and commercialization can begin to take shape.",
      category: "health",
      slug: "odense-health-innovation-day",
    },
    {
      id: 4,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "Western Germany’s Political Shift",
      description: "The recent state election in Rhineland-Palatinate showed a clear shift in western German politics, with the CDU emerging as the strongest party and the AfD recording its best result in the region so far. That outcome is politically important because western Germany has often been seen as more stable and less vulnerable to the extreme right than some eastern states. The result suggests that economic frustration, migration debates, and dissatisfaction with the status quo are reshaping voter behavior in a major industrial region. For businesses, this kind of change matters because political momentum can affect regulation, labor policy, infrastructure spending, and the overall investment climate.",
      category: "politics",
      slug: "western-germany-political-shift",
    },
    {
      id: 5,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "SDU Adds Football Research Star",
      description: "Southern Denmark’s University of Southern Denmark has strengthened its research profile by appointing Chris Carling, a leading football researcher, to deepen its work in sports science and performance analysis. This is more than a symbolic hire: it points to a growing trend in which universities combine academic research with practical applications in elite sports, analytics, and physical performance. For companies and institutions, the story is relevant because it shows how research talent can feed into innovation ecosystems beyond the lab, including data analysis, training technology, and performance optimization. It also helps position SDU as a competitive research institution with international appeal.",
      category: "science",
      slug: "sdu-adds-football-research-star",
    },
    {
      id: 6,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "Western Germany’s Political Shift",
      description: "The recent state election in Rhineland-Palatinate showed a clear shift in western German politics, with the CDU emerging as the strongest party and the AfD recording its best result in the region so far. That outcome is politically important because western Germany has often been seen as more stable and less vulnerable to the extreme right than some eastern states. The result suggests that economic frustration, migration debates, and dissatisfaction with the status quo are reshaping voter behavior in a major industrial region. For businesses, this kind of change matters because political momentum can affect regulation, labor policy, infrastructure spending, and the overall investment climate.",
      category: "politics",
      slug: "western-germany-political-shift",
    },
    {
      id: 7,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "SDU Boosts Football Research",
      description: "SDU’s decision to bring in Chris Carling, an internationally recognized football researcher, signals a stronger emphasis on data-driven sports performance. Modern football increasingly depends on analytics, biomechanics, recovery science, and evidence-based training, so this appointment fits a wider industry shift toward measurable performance gains. From a business perspective, the story matters because sports science is becoming a commercial field with links to software, wearable technology, coaching systems, and elite athlete development. It also gives SDU a sharper profile in a sector where research can quickly translate into practical value.",
      category: "sports",
      slug: "sdu-boosts-football-research",
    },
    {
      id: 8,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "Tønder Festival Stays Strong",
      description: "Tønder Festival remains one of Southern Denmark’s most recognisable cultural events, and its continuing presence matters well beyond music fans. Festivals like this support hotels, restaurants, transport, retail, and local tourism, while also helping shape the region’s identity and visibility. For a business audience, the story is interesting because cultural events are not just entertainment; they are part of the local economy and can have a real effect on foot traffic and seasonal spending. Tønder also helps Southern Denmark maintain a strong cultural brand that can attract visitors and reinforce regional appeal.",
      category: "culture",
      slug: "tonder-festival-stays-strong",
    },
]);

    return {
        newsCards
    }
}