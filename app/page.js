import { getSortedPostsData } from './lib/posts'

export default function Home() {
  const posts = getSortedPostsData()
  
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center py-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Ward de Muynck</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Product designer portfolio.
        </p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => {
          // Extract the numeric part if the id is in the format "post-X"
          const linkId = post.id.startsWith('post-') ? post.id.replace('post-', '') : post.id
          
          return (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Image: {post.coverImage}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <a href={`/blog/${linkId}`}>
                  <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition">{post.title}</h2>
                </a>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={`/blog/${linkId}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
} 