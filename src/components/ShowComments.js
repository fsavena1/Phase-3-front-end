// import { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';

// function ShowComments({posts}){

//     const [showComments, setShowComments] = useState(true)

//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`http://localhost:9292/posts/${id}`)
//           .then((r) => r.json())
//           .then((data) => console.log(data));
//       }, [id]);
      

//       console.log(posts)



//     return (
//         <div>

//         </div>
//     )
// }

// export default ShowComments 