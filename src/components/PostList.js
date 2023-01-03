import Post from "./Post";


function PostList({posts, onDelete}){

    console.log(posts)

    const postCard = posts.map((post) => {
        return (
            <Post
                 key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                user={post.user_id}
                date={post.created_at}
                comments={post.comments}
                onDelete={onDelete}
                />
        )
    })

    return (
        <div className="list">
            
       <ul className="post-card">{postCard}</ul>
       </div>
    
    )
}

export default PostList