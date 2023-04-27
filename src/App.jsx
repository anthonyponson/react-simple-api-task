import React, { useEffect, useState } from 'react'

function App() {

  const [post, setPosts] = useState([])

  useEffect(() => {
    getPost()
  })
  
  const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <div>
        {/* <button onClick={getPost}>getPost</button> */}
        {post?.map((item, index) => 
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>

          </div>
        )}
      </div>
    </>
  )
}

export default App
