// HEADER MENU CUSTOM ELEMENT
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header>
      <nav>
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li id = "usersign"><a href="signin.html">Sign in</a></li>
          </ul>
      </nav>
  </header>
      `;
    }
}

customElements.define("my-header", MyHeader);

let users = JSON.parse(localStorage.getItem("users") || "[]");
let posts = JSON.parse(localStorage.getItem("posts") || "[]");
let loggedin = JSON.parse(localStorage.getItem("loggedin") || false);

if (loggedin) {
    document.getElementById("usersign").textContent =
        "Account: " + currentUserName;
}

function User(username, password) {
    (this.userID = Date.now() + Math.floor(Math.random() * 100)),
        (this.username = username),
        (this.password = password);
}

function Post(title, imageURL, content, likes, comments) {
    this.postID = Date.now() + Math.floor(Math.random() * 100);
    (this.title = title),
        (this.imageURL = imageURL),
        (this.content = content),
        (this.likes = likes),
        (this.comments = comments);
    this.likes = 0;
}

// USER REGISTRATION
let reg_form = document.getElementById("registration-form");

reg_form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get data from registration form
    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;

    // create new user object
    let newUser = new User(newUsername, newPassword);

    // stringfy new user object to store it in users array
    let stringUser = JSON.stringify(newUser);

    // add it to the array
    users.push(newUser);

    // stringfy users array to store it in the localstorage
    // ]]
    let stringUsers = JSON.stringify(users);

    // store stringified object stored in stringified array
    localStorage.setItem("users", stringUsers);
    // console.log updated array of users
    console.log("All users: " + localStorage.getItem("users"));
    console.log(
        "All users: " + JSON.parse(localStorage.getItem("users"))[0].username
    );
    loggedin = true;

    // success message
    let currentUserName = JSON.parse(localStorage.getItem("users"))[0].username;
    document.getElementById("message").textContent =
        "Welcome " + currentUserName;

    // alert("User registered Successfuly")
    // update current user
    // localStorage.setItem('currentUser', currentUser)
    window.location.replace("admin.html");
});

// NEW POST
let newPostForm = document.getElementById("new-post-form");
newPostForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // get data from registration form
    let title = document.getElementById("title").value;
    let image = document.getElementById("image").value;
    let blogContent = document.getElementById("blog-content").value;

    // create new user object
    let newPost = new User(title, image, blogContent);

    // stringfy new user object to store it in users array
    let stringPost = JSON.stringify(newUser);

    // add it to the array
    posts.push(newPost);

    // stringfy posts array to store it in the localstorage
    let stringPosts = JSON.stringify(posts);

    // store stringified object stored in stringified array
    localStorage.setItem("posts", stringPosts);
    // console.log updated array of users
    console.log("All posts: " + localStorage.getItem("users"));
    console.log(
        "content: " + JSON.parse(localStorage.getItem("posts"))[0].content
    );

    // alert("User registered Successfuly")
    // update current user
    // localStorage.setItem('currentUser', currentUser)
    window.location.replace("admin.html");
});
