import { useEffect } from 'react'

export default function useRevealOnScroll() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
        } else {
          el.classList.remove('is-visible')
        }
      })
    }, observerOptions)

    const observeAll = () => {
      const elements = document.querySelectorAll('[data-reveal], [data-reveal-item]')
      elements.forEach((el) => {
        observer.observe(el)
      })
    }

    observeAll()

    const mutationObserver = new MutationObserver(() => {
      observeAll()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
