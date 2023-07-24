
import Post from "../../../app/components/post"
import Link from "next/link"
import styles from  "../../styles/grid.module.css"
import {getBlogs} from "../../utils/serverBlog"

export const metadata = {
  title: 'GuitarLA - Blog',
  description: 'Sobre GuitarraLA, Tienda de musica',
}


export default async function Blog() {

  const { data: posts } = await getBlogs()


  return (

    <main className="contenedor">

      <h1 className="heading">Blog</h1>

      <div className={styles.grid}>
        {posts?.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />

        ))}

      </div>

    </main>

  )
}
