import React, { useState } from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsPending(true)
    
    e.preventDefault();
    const post = { title: title, content: content, image_url: imageUrl, likes: 0 };
    
    fetch("https://umbra-genesis-blog.onrender.com/api/posts/", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }).then(console.log("New post added:", post))
    setIsPending(false)
    navigate('/posts');
  }

  return (
      <div className="pt-20 sm:pt-24 flex flex-col justify-center items-center m-4">
        <div className='lg:max-w-screen-lg w-full flex justify-center items-center flex-col'>
          <h1 className='text-center text-xl font-bold'>Create Post</h1>
          <hr />
          { isPending && (
            <p className='text-white text-xl p-5 rounded-md bg-blue-500 text-center mt-5 w-1/3 min-w-min'>Creating...</p>
          )}
          { !isPending && (
          <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center w-full'>
            <input
              onChange={(e) => setTitle(e.target.value)}
              required
              type='text'
              placeholder='Title'
              className='border w-full border-gray-400 rounded-md p-2 m-2'
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder='Content'
              className='border h-80 w-full border-gray-400 rounded-md p-2 m-2'
            ></textarea>
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              type='text'
              placeholder='Image URL'
              className='border w-full border-gray-400 rounded-md p-2 m-2'
            />

            <button className='max-w-60 w-full bg-blue-500 text-white p-2 rounded-md m-2'>
              Create
            </button>
          </form>
          )}
        </div>
        <Footer />
      </div>
  )
}
