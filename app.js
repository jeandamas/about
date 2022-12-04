let users=[];
let posts=[];
let currentUser="";

function User(userID, username, password){
    this.username=username,
    this.password=password
}

function Post(postID, authorID,title,imageURL,content,likes,comments){
    this.author=author,
    this.title=title,
    this.imageURL=imageURL,
    this.content=content,
    this.likes=likes,
    this.comments=comments
    this.likes=0
}


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
              <li><a href="signin.html">Sign in</a></li>
          </ul>
      </nav>
  </header>
      `;
    }
  }
      
  customElements.define('my-header', MyHeader);

