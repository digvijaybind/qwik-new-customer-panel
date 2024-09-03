import React from 'react'
import Link from 'next/link';


export async function getStaticProps(){
    const res=await fetch('');
    const blogs=await res.json();
    return {
        props:{
            blogs,
        }
    }
}

const Bloglist = ({blogs}) => {
  return (
    <div className="">
        <div>
            {blogs.map((blog)=>(
                <div key={blog.id}>
                    <h2> {blog.title.rendered}</h2>
                    <p>{blog.excerpt.rendered}</p>
                    <Link href={`/blog/${blog.slug}`}>
                    Read More 
                    </Link>
                    </div>
            ))}``
        </div>

    </div>
  )
}

export default Bloglist