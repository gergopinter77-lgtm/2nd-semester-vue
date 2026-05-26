import { ref } from "vue";

export const useMediaNews = () => {
    const News = ref ([
        {
            id: 1,
            text: "How to start a business in Denmark as an expat",
            text_da: "Sådan starter du en virksomhed i Danmark som expat",
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
            text: "Meet Katja Rosenburg",
            text_da: "Mød Katja Rosenburg",
            text_de: "Treffen Sie Katja Rosenburg",
            img: "https://i.imgur.com/mInKMIb.jpeg"
        },
        {
            id: 4,
            text: "Initiator of entrepreneurship",
            text_da: "Initiativtager til iværksætteri",
            text_de: "Initiator des Unternehmertums",
            img: "https://i.imgur.com/PqQe8gd.jpeg"
        },
    ]);
    return {
        News
    }
};
