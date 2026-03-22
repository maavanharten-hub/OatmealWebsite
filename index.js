import { blogPosts } from '/data.js'

const postsHtml = blogPosts.map(function(blogPost){
    const { href, title, date, text, id, image, alt } = blogPost
    return `<a href="${href}" class="post">
        <img src="${image}" class="post-image" alt="${alt}">
        <p class="date">${date}</p>
        <h3 class="title">${title}</h3>
        <p class="text">${text}</p>
        </a>
    `
})

document.getElementById("posts").innerHTML = postsHtml.join('')

const button = document.getElementById("view-btn")
const grid = document.querySelector(".posts-grid")

button.addEventListener("click", () => {
    grid.classList.toggle("show-all")
    
    if (grid.classList.contains("show-all")) {
        button.textContent = "View Less"
    }
    else {
        button.textContent = "View more"
    }
})