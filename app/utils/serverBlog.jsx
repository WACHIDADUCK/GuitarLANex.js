async function getBlogs() {

    const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  
    if (!res.ok) {
      throw new Error('Failed to fetch Guitarra')
    }
  
    return res.json()
  }

  
  export{getBlogs}  