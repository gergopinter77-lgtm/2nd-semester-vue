import { ref } from "vue";

export const useCards = () => {
    const cards = ref ([
        {
            id: 1,
            text: "Find The Perfect Opportunity At Our Events",
            number: 22,
            text2: "Upcoming events",
            button: "Find out more",
            route: "/events",
        },
        {
            id: 2,
            text: "What Is Happening In The Profesioanal World Today",
            number: 55,
            text2: "News articles",
            button: "Find out more",
            route: "/news",
        },
        {
            id: 3,
            text: "Connect With Big Companies And Other Profesionals",
            number: 40,
            text2: "New users",
            button: "Find out more",
            route: "/network",
        },
        {
            id: 4,
            text: "Upload Your Cv And Wait For The Opportunities",
            number: 90,
            text2: "Cv's in database",
            button: "Find out more",
            route: "/network",
        },
    ]);
    return { 
        cards  
    }
};