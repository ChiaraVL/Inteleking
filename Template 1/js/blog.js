const blogs = [
    { title: "Nunc ultricies", description: "Morbi vestibulum etiam non sapien eleifend, nascetur praesent nisl.", image: "https://picsum.photos/350/200?random=1" },
    { title: "Sed fermentum", description: "Integer aliquet facilisis velit eget feugiat, eros venenatis.", image: "https://picsum.photos/350/200?random=2" },
    { title: "Curabitur feugiat", description: "Aenean euismod nonummy elit lectus tincidunt adipiscing porta.", image: "https://picsum.photos/350/200?random=3" },
    { title: "Vivamus magna", description: "Maecenas dignissim convallis orci orci, dapibus egestas fusce.", image: "https://picsum.photos/350/200?random=4" },
    { title: "Aliquam ac", description: "Quisque fermentum sit amet, tempor in sodales, massa vulputate.", image: "https://picsum.photos/350/200?random=5" },
    { title: "Pellentesque ligula", description: "Vestibulum fringilla ante pharetra vehicula integer tincidunt sapien.", image: "https://picsum.photos/350/200?random=6" },
    { title: "Fusce tincidunt", description: "In ultricies turpis tincidunt egestas sapien malesuada vehicula.", image: "https://picsum.photos/350/200?random=7" },
    { title: "Praesent porttitor", description: "Lorem ipsum ligula eget augue libero, at sollicitudin velit.", image: "https://picsum.photos/350/200?random=8" },
    { title: "Etiam venenatis", description: "Donec posuere arcu, vitae tristique eleifend tristique tristique.", image: "https://picsum.photos/350/200?random=9" },
    { title: "Nunc sed", description: "Proin consequat pharetra nisl nunc, nec vehicula feugiat.", image: "https://picsum.photos/350/200?random=10" },
    { title: "Mauris ornare", description: "Pellentesque mollis est at libero posuere dapibus justo volutpat.", image: "https://picsum.photos/350/200?random=11" },
    { title: "Aenean viverra", description: "Nulla facilisi quisque varius vehicula magna erat gravida.", image: "https://picsum.photos/350/200?random=12" },
  ];

const blogsPerPage = 9; // Blogs por página
const blogContainer = document.getElementById("blogContainer");
const pagination = document.getElementById("pagination");

// Renderiza los blogs según la página
function renderBlogs(page) {
blogContainer.innerHTML = ""; // Limpia el contenedor de blogs
const start = (page - 1) * blogsPerPage;
const end = start + blogsPerPage;
const blogsToShow = blogs.slice(start, end);

blogsToShow.forEach((blog) => {
    const blogCard = `
    <div class="col-md-4 blog-card">
        <a href="#" class="card-link">
        <div class="card">
            <img src="${blog.image}" class="img-fluid card-img-top" alt="${blog.title}">
            <div class="card-body">
            <h5 class="card-title">${blog.title}</h5>
            <p class="card-text">${blog.description}</p>
            </div>
        </div>
        </a>
    </div>
    `;
    blogContainer.innerHTML += blogCard;
});
}

// Renderiza los botones de paginación
function renderPagination() {
const totalPages = Math.ceil(blogs.length / blogsPerPage);
pagination.innerHTML = ""; // Limpia los botones de paginación

for (let i = 1; i <= totalPages; i++) {
    const pageItem = `
    <li class="page-item ${i === 1 ? "active" : ""}">
        <a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>
    </li>
    `;
    pagination.innerHTML += pageItem;
}
}

// Navega a la página seleccionada
function goToPage(page) {
document.querySelectorAll(".page-item").forEach((item) => item.classList.remove("active"));
document.querySelector(`.page-item:nth-child(${page})`).classList.add("active");
renderBlogs(page);
}

// Inicialización
renderBlogs(1);
renderPagination();