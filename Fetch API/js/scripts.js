

const url = "https://jsonplaceholder.typicode.com/posts";


const postsContainer = document.querySelector("#posts-container");

// Get all posts
async function getAllPosts() {

  const response = await fetch(url);

  console.log(response);

  const data = await response.json();

  console.log(data);

  const loadingElement = document.querySelector("#loading");
  loadingElement.classList.add("hide");

}

getAllPosts();