import Post from "./Post";


function PostList({posts, onDelete, onEdit, isEditing, handleUpdatedPost}){

    // console.log(posts)

    const postCard = posts.map((post) => {
        return (
            <Post
                 key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                user={post.user.username}
                date={post.created_at}
                comments={post.comments}
                onDelete={onDelete}
                onEdit={onEdit}
                isEditing={isEditing}
                handleUpdatedPost={handleUpdatedPost}
                
            
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