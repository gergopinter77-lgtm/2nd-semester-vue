import { ref } from "vue";

export const useCards = () => {
    const cards = ref ([
        {
            id: 1,
            text: "Find The Perfect Opportunity At Our Events",
            text_da: "Find den perfekte mulighed ved vores events",
            text_de: "Finden Sie die perfekte Gelegenheit bei unseren Veranstaltungen",
            number: 22,
            text2: "Upcoming events",
            text2_da: "Begivenheder",
            text2_de: "Veranstaltungen",
            button: "Find out more",
            button_da: "Find ud af mere",
            button_de: "Erfahren Sie mehr",
            route: "/events",
        },
        {
            id: 2,
            text: "What Is Happening In The Profesioanal World Today",
            text_da: "Hvad sker der i den professionelle verden i dag",
            text_de: "Was passiert heute in der professionellen Welt",
            number: 55,
            text2: "News articles",
            text2_da: "Nyhedsartikler",
            text2_de: "Nachrichtenartikel",
            button: "Find out more",
            button_da: "Find ud af mere",
            button_de: "Erfahren Sie mehr",
            route: "/news",
        },
        {
            id: 3,
            text: "Connect With Big Companies And Other Profesionals",
            text_da: "Forbind med store virksomheder og andre fagfolk",
            text_de: "Verbinden Sie sich mit großen Unternehmen und anderen Fachleuten",
            number: 40,
            text2: "New users",
            text2_da: "Nye brugere",
            text2_de: "Neue Nutzer",
            button: "Find out more",
            button_da: "Find ud af mere",
            button_de: "Erfahren Sie mehr",
            route: "/network",
        },
        {
            id: 4,
            text: "Upload Your Cv And Wait For The Opportunities",
            text_da: "Upload dit CV og vent på mulighederne",
            text_de: "Laden Sie Ihren Lebenslauf hoch und warten Sie auf die Möglichkeiten",
            number: 90,
            text2: "Cv's in database",
            text2_da: "CV'er i databasen",
            text2_de: "Lebensläufe",
            button: "Find out more",
            button_da: "Find ud af mere",
            button_de: "Erfahren Sie mehr",
            route: "/network",
        },
    ]);
    return { 
        cards  
    }
};