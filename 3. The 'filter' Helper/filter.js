var products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'celery', type: 'vegetable'},
    {name: 'orange', type: 'fruit'}
];

// var filteredProducts = [];

// for(var i = 0; i < products.length; i++) {
//     if (products[i].type === 'fruit'){
//         filteredProducts.push(products[i]);
//     }
// }


var filtered = products.filter((product) => product.type === 'fruit');

filteredProducts;

// ---
var post = {id: 4, title: 'New Post'};
var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'}
];

// function commentsForPost(post, comments) {
//     return comments.filter(function(comment) {
//         return comment.postId === post.id;
//     })
// }

var commentsForPost = (post, comments) => comments.filter(comment => comment.postId === post.id);
commentsForPost(post, comments);
