import { ref } from 'vue'

export function useEventCard() {
    const eventCards = ref([
        {
            id: 1,
            title: 'Tech Conferrence 2024',
            date: '2026-06-06',
            location: 'Location 1',
            category: 'Technology',
            image: 'https://i.imgur.com/AXmyIBs.jpeg',
            slug: 'tech-conference-2024',
        },
        {
            id: 2,
            title: 'Tech Conferrence 2024',
            date: '2026-06-06',
            location: 'Location 1',
            category: 'Technology',
            image: 'https://i.imgur.com/AXmyIBs.jpeg',
            slug: 'tech-conference-2024',
        },
        {
            id: 3,
            title: 'Tech Conferrence 2024',
            date: '2026-06-06',
            location: 'Location 1',
            category: 'Technology',
            image: 'https://i.imgur.com/AXmyIBs.jpeg',
            slug: 'tech-conference-2024',
        },
        {
            id: 4,
            title: 'Tech Conferrence 2024',
            date: '2026-06-06',
            location: 'Location 1',
            category: 'Technology',
            image: 'https://i.imgur.com/AXmyIBs.jpeg',
            slug: 'tech-conference-2024',
        },
        {
            id: 5,
            title: 'Tech Conferrence 2024',
            date: '2026-06-06',
            location: 'Location 1',
            category: 'Technology',
            image: 'https://i.imgur.com/AXmyIBs.jpeg',
            slug: 'tech-conference-2024',
        },
        {
            id: 6,
            title: 'Tech Conferrence 2024',
            date: '2026-06-06',
            location: 'Location 1',
            category: 'Technology',
            image: 'https://i.imgur.com/AXmyIBs.jpeg',
            slug: 'tech-conference-2024',
        },
        {
            id: 7,
            title: 'Tech Conferrence 2024',
            date: '2026-06-06',
            location: 'Location 1',
            category: 'Technology',
            image: 'https://i.imgur.com/AXmyIBs.jpeg',
            slug: 'tech-conference-2024',
        },
        {
            id: 8,
            title: 'Tech Conferrence 2024',
            date: '2026-06-06',
            location: 'Location 1',
            category: 'Technology',
            image: 'https://i.imgur.com/AXmyIBs.jpeg',
            slug: 'tech-conference-2024',
        },
    ])

    return {
        eventCards,
    }
}
