import { ref } from "vue";

export const useNewsCard = () => {
const newsCards = ref ([
    {
      id: 1,
      image: "https://i.imgur.com/AXmyIBs.jpeg",  
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      category: "technology",
    },
    {
      id: 2,
      image: "https://i.imgur.com/a8vTGvb.jpeg",  
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      category: "business",
    },
    {
      id: 3,
      image: "https://i.imgur.com/gCVYFp2.jpeg",  
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      category: "sports",
    },
    {
      id: 4,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      category: "politics",
    },
    {
      id: 5,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      category: "science",
    },
    {
      id: 6,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      category: "politics",
    },
    {
      id: 7,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      category: "technology",
    },
    {
      id: 8,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      category: "business",
    },
]);

    return {
        newsCards
    }
}