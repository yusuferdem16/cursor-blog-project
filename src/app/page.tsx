import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Blog Yazılarım</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
            <Link href={`/posts/${post.slug}`} className="block group">
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">{post.title}</h2>
            </Link>
            <time className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</time>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{post.description}</p>
            <Link 
              href={`/posts/${post.slug}`} 
              className="mt-6 inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
            >
              Devamını Oku 
              <span className="ml-2">→</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
