const stories = document.getElementsByClassName('story')
console.log(stories)
const observer = new IntersectionObserver(entries => {
  entries.filter(entry => entry.isIntersecting).forEach((entry)=> {
    entry.target.classList.add('show-story')
    observer.unobserve(entry.target)
  })
}, {
  threshold: .7
})
observer.observe(stories[0])
observer.observe(stories[1])
observer.observe(stories[2])
