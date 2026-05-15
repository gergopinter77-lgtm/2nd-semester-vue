import { ref } from "vue";

export const useNewev = () => {
const newses = ref ([
    {
      id: 1,
      image: "https://i.imgur.com/AXmyIBs.jpeg",  
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      image: "https://i.imgur.com/a8vTGvb.jpeg",  
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      image: "https://i.imgur.com/gCVYFp2.jpeg",  
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 4,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      text: "Lorem ipsum dolor sit amet consectetur.",
    }
]);

    return {
        newses
    }
}