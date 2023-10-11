var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LikesService = /** @class */ (function () {
    function LikesService(likes, dislikes) {
        if (likes === void 0) { likes = 0; }
        if (dislikes === void 0) { dislikes = 0; }
        this.likes = likes;
        this.dislikes = dislikes;
    }
    LikesService.prototype.like = function () {
        this.likes++;
    };
    LikesService.prototype.dislike = function () {
        this.dislikes++;
    };
    LikesService.prototype.getLikes = function () {
        return this.likes;
    };
    LikesService.prototype.getDislikes = function () {
        return this.dislikes;
    };
    return LikesService;
}());
var MyComment = /** @class */ (function (_super) {
    __extends(MyComment, _super);
    function MyComment(msg) {
        var _this = _super.call(this) || this;
        _this.msg = msg;
        return _this;
    }
    return MyComment;
}(LikesService));
var CommentsService = /** @class */ (function () {
    function CommentsService(comments, commentsQty) {
        if (comments === void 0) { comments = []; }
        if (commentsQty === void 0) { commentsQty = 0; }
        this.comments = comments;
        this.commentsQty = commentsQty;
    }
    CommentsService.prototype.addComment = function (comment) {
        this.commentsQty++;
        this.comments.push({ id: this.commentsQty, comment: comment });
    };
    CommentsService.prototype.getComments = function () {
        return this.comments;
    };
    return CommentsService;
}());
console.log('\n');
console.log("Creamos una nueva instancia de nuestro servicio de comentarios");
var thread = new CommentsService();
console.log(thread);
console.log('\n');
console.log("Si llamamos a la funcion getComments vemos que viene vacia porque todavia no agregamos nada");
console.log(thread.getComments());
console.log('\n');
console.log("Creamos una nueva instancia de un comentario con un mensaje que querramos");
var firstComment = new MyComment("this is a test");
console.log(firstComment);
console.log('\n');
console.log("Agregamos nuestro comentario a nuestro thread");
thread.addComment(firstComment);
console.log(thread);
console.log('\n');
console.log("Ahora nuestro thread tiene un comentario");
console.log(thread.getComments());
console.log('\n');
console.log("Le damos like a nuestro comentario");
firstComment.like();
console.log(firstComment);
console.log('\n');
console.log("Vemos que nuestro comentario tiene un like dentro de nuestro thread");
console.log(thread.getComments());
