import { useState, useEffect } from 'react';
import Post from './Post';
import Footer from './Footer'

export default function Posts() {
    const [posts, setPosts] = useState([null]);

    useEffect(() => {
        fetch("https://umbra-genesis-blog.onrender.com/api/posts/")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    function handleDeletePost(id, index) {
        if (id) {
            fetch(`https://umbra-genesis-blog.onrender.com/api/posts/${id}`, {
                method: 'DELETE',
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                // Create a new array without the deleted post
                const updatedPosts = posts.filter((_, postIndex) => postIndex !== index);
                setPosts(updatedPosts); // Update the state with the new array
            })
            .catch((error) => console.error('There was a problem with the fetch operation:', error));
        } else {
            console.log('No id provided');
        }
    }

    return (
        <>
            <div className='m-4 flex justify-center items-center'>
                <main className='lg:max-w-screen-lg w-full flex mt-20 sm:mt-24 flex-col items-center'>
                    {posts[0] === null ? <p>Loading...</p> :
                        posts.map((post, i) => (
                            <Post key={i} postKey={i} deletePost={handleDeletePost} id={post._id} title={post.title} content={post.content} image_src={post.image_url} likes={post.likes} />
                    ))}
                </main>
            </div>
            <div className='m-4 flex justify-center items-center'>
                <Footer />
            </div>
        </>
  );    
}
