import { ref } from "vue";

export const useMedias = () => {
    const medias = ref ([
    {
        id: 1,
        pictures: "https://i.imgur.com/LzYedxB.jpeg"
    },   
    {
        id: 2,
        pictures: "https://i.imgur.com/69Kd18c.jpeg"
    },   
    {
        id: 3,
        pictures: "https://i.imgur.com/N2NNLiB.jpeg"
    },   
    {
        id: 4,
        pictures: "https://i.imgur.com/0D8ztvS.jpeg"
    },   
    {
        id: 5,
        pictures: "https://i.imgur.com/rs8QcbG.jpeg"
    },   
    {
        id: 6,
        pictures: "https://i.imgur.com/vVDWNeF.jpeg"
    },   
    {
        id: 7,
        pictures: "https://i.imgur.com/p2E6hSj.jpeg"
    },   
    {
        id: 8,
        pictures: "https://i.imgur.com/rs8QcbG.jpeg"
    }   
    ]);
    return {
        medias
        }
}

