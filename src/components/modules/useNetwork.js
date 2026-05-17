import { ref, computed } from 'vue'

export const useNetwork = () => {
    const members = ref([
        {
            id: 1,
            name: "Agentur für Arbeit Flensburg",
            description: "Public employment agency for the Flensburg region.",
            country: "DE",
            image: "https://i.imgur.com/AXmyIBs.jpeg"
        },
        {
            id: 2,
            name: "Bundesagentur für Arbeit",
            description: "German federal employment agency supporting jobseekers and employers.",
            country: "DE",
            image: "https://i.imgur.com/a8vTGvb.jpeg"
        },
        {
            id: 3,
            name: "Business Aabenraa",
            description: "Business council supporting companies and growth in Aabenraa.",
            country: "DK",
            image: "https://i.imgur.com/gCVYFp2.jpeg"
        },
        {
            id: 4,
            name: "Business Esbjerg",
            description: "Business council supporting companies and growth in Esbjerg.",
            country: "DK",
            image: "https://i.imgur.com/Trlf3Lb.jpeg"
        },
        {
            id: 5,
            name: "Business Kolding",
            description: "Business council supporting companies and growth in Kolding.",
            country: "DK",
            image: "https://i.imgur.com/AXmyIBs.jpeg"
        },
        {
            id: 6,
            name: "Copenhagen Capacity",
            description: "Investment promotion agency attracting companies and talent to Greater Copenhagen.",
            country: "DK",
            image: "https://i.imgur.com/a8vTGvb.jpeg"
        },
        {
            id: 7,
            name: "DI – Dansk Industri Deutschland",
            description: "The German branch of the Confederation of Danish Industry.",
            country: "DE",
            image: "https://i.imgur.com/gCVYFp2.jpeg"
        },
        {
            id: 8,
            name: "Foreningen Sønderborg Vækstråd",
            description: "Growth council supporting companies in Sønderborg Municipality.",
            country: "DK",
            image: "https://i.imgur.com/Trlf3Lb.jpeg"
        },
        {
            id: 9,
            name: "HanseBelt e.V.",
            description: "German business network promoting Danish-German cooperation in the Fehmarnbelt region.",
            country: "DE",
            image: "https://i.imgur.com/AXmyIBs.jpeg"
        },
        {
            id: 10,
            name: "Jackstädt-Zentrum Flensburg",
            description: "Entrepreneurship and innovation centre at Hochschule Flensburg.",
            country: "DE",
            image: "https://i.imgur.com/a8vTGvb.jpeg"
        },
        {
            id: 11,
            name: "Industrie- und Handelskammer zu Flensburg",
            description: "Chamber of industry and commerce supporting businesses in Schleswig-Holstein.",
            country: "DE",
            image: "https://i.imgur.com/gCVYFp2.jpeg"
        },
        {
            id: 12,
            name: "KielRegion GmbH",
            description: "Regional development organisation for the Kiel area in Schleswig-Holstein.",
            country: "DE",
            image: "https://i.imgur.com/Trlf3Lb.jpeg"
        },
        {
            id: 13,
            name: "Region Syddanmark",
            description: "Danish regional authority driving development in Southern Denmark.",
            country: "DK",
            image: "https://i.imgur.com/AXmyIBs.jpeg"
        },
        {
            id: 14,
            name: "Regionaldirektion Nord",
            description: "German federal employment authority for Northern Germany.",
            country: "DE",
            image: "https://i.imgur.com/a8vTGvb.jpeg"
        },
        {
            id: 15,
            name: "S/I Erhvervshus Sydjylland",
            description: "Business hub supporting companies across Southern Jutland.",
            country: "DK",
            image: "https://i.imgur.com/gCVYFp2.jpeg"
        },
        {
            id: 16,
            name: "Tønder Erhvervsråd",
            description: "Business council supporting companies and entrepreneurs in Tønder.",
            country: "DK",
            image: "https://i.imgur.com/Trlf3Lb.jpeg"
        },
        {
            id: 17,
            name: "Trekantområdet Danmark",
            description: "Regional partnership of seven municipalities in the Triangle Region.",
            country: "DK",
            image: "https://i.imgur.com/AXmyIBs.jpeg"
        },
        {
            id: 18,
            name: "Udviklingsråd Sønderjylland",
            description: "Development council for the Sønderjylland region.",
            country: "DK",
            image: "https://i.imgur.com/a8vTGvb.jpeg"
        },
        {
            id: 19,
            name: "Udviklingsråd Vejen",
            description: "Development council for Vejen Municipality.",
            country: "DK",
            image: "https://i.imgur.com/gCVYFp2.jpeg"
        },
        {
            id: 20,
            name: "Unternehmensverband Unterelbe-Westküste e.V.",
            description: "Business association for the Unterelbe-Westküste region in Germany.",
            country: "DE",
            image: "https://i.imgur.com/Trlf3Lb.jpeg"
        },
        {
            id: 21,
            name: "WFG Flensburg/Schleswig",
            description: "Economic development agency for Flensburg and Schleswig.",
            country: "DE",
            image: "https://i.imgur.com/AXmyIBs.jpeg"
        },
        {
            id: 22,
            name: "WFG Rendsburg-Eckernförde",
            description: "Economic development agency for the Rendsburg-Eckernförde district.",
            country: "DE",
            image: "https://i.imgur.com/a8vTGvb.jpeg"
        },
        {
            id: 23,
            name: "WFG Nordfriesland",
            description: "Economic development agency for the Nordfriesland district.",
            country: "DE",
            image: "https://i.imgur.com/gCVYFp2.jpeg"
        },
        {
            id: 24,
            name: "Wirtschaftsvereinigung Eutin e.V.",
            description: "Business association supporting companies in Eutin.",
            country: "DE",
            image: "https://i.imgur.com/Trlf3Lb.jpeg"
        },
        {
            id: 25,
            name: "Work-live-stay",
            description: "Network attracting and retaining international talent in Southern Denmark.",
            country: "DK",
            image: "https://i.imgur.com/AXmyIBs.jpeg"
        },
        {
            id: 26,
            name: "Workindenmark South",
            description: "Public service helping international workers find jobs in Denmark.",
            country: "DK",
            image: "https://i.imgur.com/a8vTGvb.jpeg"
        }
    ])

    const selectedCountry = ref('all')

    const filteredMembers = computed(() => {
        if (selectedCountry.value === 'all') return members.value
        return members.value.filter(m => m.country === selectedCountry.value)
    })

    return {
        members,
        selectedCountry,
        filteredMembers
    }
}