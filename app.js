let users=[];
let posts=[];
let commets=[];
let likes=[];

function User(username, password){
    this.username=username,
    this.password=password
}

function Post(author,title,image,content){
    this.author=author,
    this.title=title,
    this.image=image,
    this.content=content
}