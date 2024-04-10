// Blog list
const blogList = document.getElementById('blogList');

// Load existing blog entries from local storage
const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Add event listener to the form
document.getElementById('blogForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Create blog object
  const blog = {
    title,
    content
  };

  // Add blog object to the blog list
  addBlogToList(blog);

  // Save blogs to local storage
  savedBlogs.push(blog);
  localStorage.setItem('blogs', JSON.stringify(savedBlogs));

  // Clear form fields
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
});

// Function to add a blog to the list
function addBlogToList(blog) {
  // Create list item
  const listItem = document.createElement('li');

  // Create blog content
  const blogContent = document.createElement('div');
  blogContent.innerHTML = `
    <h2>${blog.title}</h2>
    <p>${blog.content}</p>
    <a href="details.html?id=${encodeURIComponent(blog.title)}" class="detailsLink">Details</a>
  `;

  // Append blog content to list item
  listItem.appendChild(blogContent);

  // Append list item to the blog list
  blogList.appendChild(listItem);
}