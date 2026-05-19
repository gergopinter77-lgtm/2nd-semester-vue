import { ref } from "vue";

export const useMedias = () => {
    const medias = ref ([
    {
        id: 1,
        pictures: "https://i.imgur.com/LzYedxB.jpeg",
        title: "lorem ipsum dolor sit amet",
    },   
    {
        id: 2,
        pictures: "https://i.imgur.com/69Kd18c.jpeg",
        title: "lorem ipsum dolor sit amet",
    },   
    {
        id: 3,
        pictures: "https://i.imgur.com/N2NNLiB.jpeg",
        title: "lorem ipsum dolor sit amet",
    },   
    {
        id: 4,
        pictures: "https://i.imgur.com/0D8ztvS.jpeg",
        title: "lorem ipsum dolor sit amet",
    },   
    {
        id: 5,
        pictures: "https://i.imgur.com/rs8QcbG.jpeg",
        title: "lorem ipsum dolor sit amet",
    },   
    {
        id: 6,
        pictures: "https://i.imgur.com/vVDWNeF.jpeg",
        title: "lorem ipsum dolor sit amet",
    },   
    ]);
    return {
        medias
        }
}

