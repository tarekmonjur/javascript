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

function createPost(post)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;

            if(!error){
                resolve();
            }else{
                reject('Error! Something went wrong.');
            }
        }, 2000);
    });
}

createPost({
    title : 'title three',
    description : 'post description'
}).then(getPosts)
    .catch(err => console.log(err));

