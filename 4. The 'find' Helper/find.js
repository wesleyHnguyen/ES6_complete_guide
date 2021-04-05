var users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'},
    
];

var user;

// for(var i = 0; i < users.length; i++) {
//     if(users[i].name === 'Alex')
//     {
//         user = users[i];
//         break;
//     }
// }

users.find((user) => user.name === 'Alex');

user;

// ---
var posts = [
    {id: 1, title: 'New Post'},
    {id: 2, title: 'Old Post'}
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
    return posts.find((post) => post.id === comment.postId);
}

postForComment(posts, comment);