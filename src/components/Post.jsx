import React, { useState } from 'react';

export default function Post({ deletePost, id, postKey, title, content, image_src, likes }) {
    const [likesAmount, setLikesAmount] = useState(likes);

    function handleClick() {
        deletePost(id, postKey);
    }
    if (likesAmount < 0) {
        setLikesAmount(0)
    }

    async function handleLike() {
        if (likesAmount != null) {
            setLikesAmount(likesAmount + 1);  // Increment likes
        } else {
            setLikesAmount(0);
        }

        try {
            const response = await fetch(`https://umbra-genesis-blog.onrender.com/api/posts/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ likes: likesAmount + 1 })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    async function handleDislike() {
        if (likesAmount > 0) {
            setLikesAmount(likesAmount - 1);  // Decrement likes
        } else {
            console.log("Cannot decrease likes below zero");
        }

        try {
            const response = await fetch(`https://umbra-genesis-blog.onrender.com/api/posts/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ likes: likesAmount - 1 })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    return (
        <>
            <div className='bg-gray-200 overflow-hidden min-h-40 w-full max-h-80 grid mb-10 gap-2 sm:gap-0 sm:grid-cols-2 sm:m-4 border hover:border-gray-500 border-gray-300 rounded-lg'>
                <div className='px-4 py-2 max-h-32'>
                    <h1 className='text-lg font-bold'>{title}</h1>
                    <p>{content}</p>
                </div>
                {image_src && (
                    <div className='max-h-80 flex items-center justify-center sm:justify-end overflow-hidden'>
                        <img className='sm:border-l border-gray-300 object-cover' src={image_src} alt="Post image" />
                    </div>
                )}
            </div>
            <div className='flex justify-start w-full -translate-y-12 sm:-translate-y-5'>
                <button className='font-bold mr-2 p-2 border bg-blue-400 rounded-lg border-gray-300 text-white'>
                    Likes: {likesAmount}
                </button>
                <button onClick={handleLike} className='p-2 mr-2 border hover:bg-green-600 bg-gray-200 rounded-lg border-gray-300 text-gray-500 hover:text-white'>
                    Like
                </button>
                <button onClick={handleDislike} className='p-2 mr-2 border hover:bg-yellow-600 bg-gray-200 rounded-lg border-gray-300 text-gray-500 hover:text-white'>
                    Dislike
                </button>
                <button onClick={handleClick} className='p-2 border hover:bg-red-600 bg-gray-200 rounded-lg border-gray-300 text-gray-500 hover:text-white'>
                    Delete
                </button>
                
            </div>
        </>
    );
}
