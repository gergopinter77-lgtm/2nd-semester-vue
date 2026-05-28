import { ref } from "vue";

export const useMediaNews = () => {
    const News = ref ([
        {
            id: 1,
            text: "How to start a business in the southern border region",
            text_da: "So gründen Sie ein Unternehmen in der südlichen Grenzregion",
            text_de: "Wie man als Expat ein Unternehmen in Dänemark gründet",
            img: "https://i.imgur.com/hkGX3B8.jpeg"
        },
        {
            id: 2,
            text: "Business promotion and cross-border cooperation",
            text_da: "Erhvervsfremme og grænseoverskridende samarbejde",
            text_de: "Wirtschaftsförderung und grenzüberschreitende Zusammenarbeit",
            img: "https://i.imgur.com/DN94k3y.jpeg"
        },
        {
            id: 3,
            text: "German companies in Denmark",
            text_da: "Tyske virksomheder I danmark",
            text_de: "Deutsche Unternehmen in Dänemark",
            img: "https://i.imgur.com/mInKMIb.jpeg"
        },
        {
            id: 4,
            text: "Cross-border commuter",
            text_da: "Grænsependler",
            text_de: "Grenzgänger",
            img: "https://i.imgur.com/PqQe8gd.jpeg"
        },
    ]);
    return {
        News
    }
};
