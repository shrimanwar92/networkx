const items = [{
    title: "Prime video/Netflix system design",
    contentUrl: "./design-patterns/prime-video"
}, {
    title: "Database sharding and partitioning",
    contentUrl: "./design-patterns/database-sharding"
}];

items.forEach(item => {
    html = `
        <li onmouseover="makeActive(this)" onmouseout="removeActive(this)" class="list-group-item nx-item clearfix col-md-6">
            <a class="nx-list-item-link" target="_blank" href="${item.contentUrl}">
                <h5 class="list-group-item-heading">${item.title}</h5>
            </a>
        </li>
    `;
    document.querySelector(".list-group").insertAdjacentHTML("beforeend", html)
})

function makeActive(e) {
    e.classList.add("active")
}

function removeActive(e) {
    e.classList.remove("active")
}