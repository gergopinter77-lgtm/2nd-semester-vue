import { ref } from "vue";

export const useMediaNews = () => {
    const News = ref ([
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet",
            img: "https://i.imgur.com/hkGX3B8.jpeg"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet",
            img: "https://i.imgur.com/DN94k3y.jpeg"
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet",
            img: "https://i.imgur.com/mInKMIb.jpeg"
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet",
            img: "https://i.imgur.com/PqQe8gd.jpeg"
        },
    ]);
    return { 
        News  
    }
};