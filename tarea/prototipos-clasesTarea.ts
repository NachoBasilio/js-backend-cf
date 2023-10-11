class LikesService {

  constructor(
    public likes: number = 0,
    public dislikes: number = 0
  ) {}

  like():void {
    this.likes++;
  }

  dislike():void {
    this.dislikes++;
  }

  getLikes(): number {
    return this.likes;
  }

  getDislikes(): number {
    return this.dislikes;
  }
}

class MyComment extends LikesService {
  constructor(
    public msg: string
  ) {
    super();
  }
}

class CommentsService {
  constructor(
    public comments: any[] = [],
    public commentsQty: number = 0
  ) {
  }

  addComment(comment):void {
    this.commentsQty++;

    this.comments.push({ id: this.commentsQty, comment });
  }

  getComments(): any[] {
    return this.comments;
  }
}


console.log('\n')

console.log("Creamos una nueva instancia de nuestro servicio de comentarios")
const thread:CommentsService = new CommentsService();
console.log(thread)
console.log('\n')

console.log("Si llamamos a la funcion getComments vemos que viene vacia porque todavia no agregamos nada")
console.log(thread.getComments())
console.log('\n')

console.log("Creamos una nueva instancia de un comentario con un mensaje que querramos")
const firstComment: MyComment = new MyComment("this is a test")
console.log(firstComment)
console.log('\n')

console.log("Agregamos nuestro comentario a nuestro thread")
thread.addComment(firstComment)
console.log(thread)
console.log('\n')

console.log("Ahora nuestro thread tiene un comentario")
console.log(thread.getComments())
console.log('\n')

console.log("Le damos like a nuestro comentario")
firstComment.like();
console.log(firstComment)
console.log('\n')

console.log("Vemos que nuestro comentario tiene un like dentro de nuestro thread")
console.log(thread.getComments())

