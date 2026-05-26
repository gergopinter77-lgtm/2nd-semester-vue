import { ref } from "vue";

export const useMedias = () => {
    const medias = ref ([
    {
        id: 1,
        pictures: "https://i.imgur.com/LzYedxB.jpeg",
        title: "When onboarding becomes a whole",
        title_da: "Når onboarding bliver en helhed",
        title_de: "Wenn das Onboarding zu einem Ganzen wird",
        category: "technology",
    },
    {
        id: 2,
        pictures: "https://i.imgur.com/69Kd18c.jpeg",
        title: "From foreigner to integrated",
        title_da: "Fra udlænding til integreret",
        title_de: "Vom Ausländer zum Integrierten",
        category: "business",
    },
    {
        id: 3,
        pictures: "https://i.imgur.com/N2NNLiB.jpeg",
        title: "See the interview with Gwyn Nissen",
        title_da: "Se interviewet med Gwyn Nissen",
        title_de: "Sehen Sie sich das Interview mit Gwyn Nissen an",
        category: "politics",
    },
    {
        id: 4,
        pictures: "https://i.imgur.com/0D8ztvS.jpeg",
        title: "Business DE-DK ​​borderless cooperation",
        title_da: "Erhverv DE-DK ​​grænseløst samarbejde",
        title_de: "Business DE-DK ​​grænseløst samarbejde",
        category: "science",
    },
    {
        id: 5,
        pictures: "https://i.imgur.com/rs8QcbG.jpeg",
        title: "Business director at Tønder Business Council",
        title_da: "Erhvervsdirektør i Tønder Erhvervsråd",
        title_de: "Geschäftsführer des Tønder Business Council",
        category: "politics",
    },
    {
        id: 6,
        pictures: "https://i.imgur.com/vVDWNeF.jpeg",
        title: "What opportunities – and what challenges",
        title_da: "Hvilke muligheder – og hvilke udfordringer",
        title_de: "Welche Chancen – und welche Herausforderungen",
        category: "technology",
    },
    ]);
    return {
        medias
        }
}

