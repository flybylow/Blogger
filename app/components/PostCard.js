import Link from 'next/link'
import { format } from 'date-fns'

export default function PostCard({ id, title, date, excerpt, coverImage }) {
  // Extract the numeric part if the id is in the format "post-X"
  const linkId = id.startsWith('post-') ? id.replace('post-', '') : id
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 relative">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500">Image: {coverImage}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">
          {format(new Date(date), 'MMMM d, yyyy')}
        </p>
        <Link href={`/blog/${linkId}`}>
          <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition">{title}</h2>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link 
          href={`/blog/${linkId}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Read more →
        </Link>
      </div>
    </div>
  )
} 