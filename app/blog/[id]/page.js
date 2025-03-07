import { getAllPostIds, getPostData } from '../../lib/posts'
import { format } from 'date-fns'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function BlogPost({ params }) {
  // Add "post-" prefix to the id if it's a number
  const postId = isNaN(params.id) ? params.id : `post-${params.id}`
  const post = await getPostData(postId)
  
  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
      
      {post.coverImage && (
        <div className="h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
          <p className="text-gray-500">Featured Image: {post.coverImage}</p>
        </div>
      )}
      
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
      
      <div className="mt-12 pt-6 border-t border-gray-200">
        <a 
          href="/" 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to all posts
        </a>
      </div>
    </article>
  )
} 