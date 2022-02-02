import React, { useEffect } from 'react';
import axios from 'axios';

// const client = axios.create({
//     baseURL: "https://rest.bandsintown.com/artists/ahmadjamal?app_id=foo" 
//   });



const Result = ({ username }) => {
    const [posts, setPost] = React.useState(null);
    // const baseURL = "https://api.github.com/users/ViViAnna25/repos";
    const baseURL = `https://api.github.com/users/${username}/repos`;
    // useEffect(() => {
    //     async function getPost() {
    //       const { response } = await client.get("/1");
    //       setPost(response.data);
    //     }
    //     getPost();
    //   }, []);
    
    //   async function deletePost() {
    //     await client.delete("/1");
    //     alert("Post deleted!");
    //     setPost(null);
    //   }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          console.log(response.data);
        });
      }, []);

  if (!posts) return null;

  return (
    <>
    <div>
      {posts.map(post => <h2>{post.name}</h2>)}
    </div>
    </>
  )

};

export default Result;
