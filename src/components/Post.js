function Post({title, body, user, date,comments}){

    return (
    <li>
        <span className="user"> User Id {user}</span>
        <br/>

        <br />
        <span className="title">{title}</span>
        <br/>

        <br />
        <span className="body">{body}</span>
        <br/>

        <br />
        <span className="date"> {date}</span>

        {/* <span className="comments"> {comments} </span> */}

    </li>
    
    )

}



export default Post