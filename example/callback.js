const posts = [
    {title : 'Title one', description: 'This is title one description'},
    {title : 'Title two', description: 'This is title one description'}
];

function getPosts()
{
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li> ${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback)
{
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);

}

createPost({
    title : 'title three',
    description : 'post description'
}, getPosts);

