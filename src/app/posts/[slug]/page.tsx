import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/" className="text-blue-500 hover:text-blue-600 hover:underline mb-8 inline-block">
        ← Ana Sayfaya Dön
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray-400">{post.date}</time>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
} 