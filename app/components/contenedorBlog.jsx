
import Post from "@/app/components/post"
import Link from "next/link"
import styles from  "@/app/styles/grid.module.css"
import {getBlogs} from "@/app/utils/serverBlog"

export default async function ContenedorBlog() {

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
