import Post from "./Post";


function PostList({posts}){

    console.log(posts)

    const postCard = posts.map((post) => {
        return (
            <Post
                key={post.id}
               title={post.title}
               body={post.body}
               user={post.user_id}
               date={post.created_at}
               comments={post.comments}
                />
        )
    })

    return (
       <ul className="post-card">{postCard}</ul>
    
    )
}



export default PostList