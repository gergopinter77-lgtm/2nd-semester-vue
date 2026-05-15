import { ref, computed } from 'vue'

const items = [
  {
    label: 'What We Do',
    title: 'What We Do',
    body: 'We are a people-operations consultancy helping organisations build better workplaces. From strategy to execution, we partner with HR and leadership teams to solve the challenges that matter most — attracting talent, improving culture, and building systems that scale.'
  },
  {
    label: 'Talent Attraction, Onboarding And Retention',
    title: 'Talent Attraction, Onboarding & Retention',
    body: 'We design end-to-end experiences that draw top-tier candidates, guide them through a seamless onboarding journey, and build loyalty that keeps them engaged for the long run. From employer branding to 90-day integration plans, we help organisations become places people genuinely want to work.'
  },
  {
    label: 'How Does Commuting Work',
    title: 'How Does Commuting Work?',
    body: 'Our commuting framework maps the real-world friction employees face every day — transit options, flexible scheduling, remote-work policies, and mobility stipends. We benchmark best-in-class practices and craft a commuting strategy that reduces attrition caused by location challenges.'
  },
  {
    label: 'How Does This Website Work',
    title: 'How Does This Website Work?',
    body: 'This platform acts as a living knowledge base for HR and people-operations teams. Content is curated by practitioners, updated in real time, and structured around the decisions you actually face. Each section surfaces tools, templates, and case studies you can act on immediately.'
  },
]

export function useAbout() {
  const activeIndex = ref(0)
  const active = computed(() => items[activeIndex.value])

  return { items, activeIndex, active }
}