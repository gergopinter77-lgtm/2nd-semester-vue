import { ref } from "vue";

export const useNewev = () => {
const newses = ref ([
    {
      id: 1,
      image: "https://i.imgur.com/AXmyIBs.jpeg",  
      title: "Southern Denmark’s Supercomputer Boost",
      title_da: "Syd Danmarks Supercomputer Boost",
      title_de: "Süd Dänemarks Supercomputer Boost",
    },
    {
      id: 2,
      image: "https://i.imgur.com/a8vTGvb.jpeg",  
      title: "Business Summit 2026",
      title_da: "Business Summit 2026",
      title_de: "Business Summit 2026",
    },
    {
      id: 3,
      image: "https://i.imgur.com/a8vTGvb.jpeg",  
      title: "Tech Conference 2026",
      title_da: "Tech Konference 2026",
      title_de: "Tech Konferenz 2026",
    },
    {
      id: 4,
      image: "https://i.imgur.com/Trlf3Lb.jpeg",  
      title: "Germany’s Business Pressure Grows",
      title_da: "Tysklands forretningspres vokser",
      title_de: "Der Druck auf die deutsche Wirtschaft wächst",
    }
]);

    return {
        newses
    }
}