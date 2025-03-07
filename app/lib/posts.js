import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    
    // Create sample posts if directory was just created
    createSamplePosts()
  }
  
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}

export function getAllPostIds() {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    
    // Create sample posts if directory was just created
    createSamplePosts()
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

function createSamplePosts() {
  const samplePosts = [
    {
      title: 'Getting Started with Next.js',
      date: '2023-01-15',
      excerpt: 'Learn the basics of Next.js and how to create your first application.',
      coverImage: '/images/nextjs.jpg',
      content: `
# Getting Started with Next.js

Next.js is a React framework that enables server-side rendering and static site generation for React applications.

## Why Next.js?

- **Server-side Rendering**: Improves performance and SEO
- **Static Site Generation**: Pre-renders pages at build time
- **API Routes**: Create API endpoints as part of your Next.js app
- **File-based Routing**: Create routes based on the file system

## Creating a Next.js App

To create a new Next.js app, run:

\`\`\`bash
npx create-next-app my-app
cd my-app
npm run dev
\`\`\`

This will start a development server at http://localhost:3000.

## Pages in Next.js

In Next.js, a page is a React Component exported from a file in the \`pages\` directory. Each page is associated with a route based on its file name.

\`\`\`jsx
// pages/index.js
export default function Home() {
  return <h1>Hello, Next.js!</h1>
}
\`\`\`

## Conclusion

Next.js provides a great developer experience with all the features you need for production. It's a great choice for building modern web applications.
      `,
    },
    {
      title: 'Working with Markdown in Next.js',
      date: '2023-02-20',
      excerpt: 'Learn how to use markdown files as a data source in your Next.js blog.',
      coverImage: '/images/markdown.jpg',
      content: `
# Working with Markdown in Next.js

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. In this post, we'll learn how to use markdown files as a data source in a Next.js blog.

## Setting Up

First, we need to install some dependencies:

\`\`\`bash
npm install gray-matter remark remark-html
\`\`\`

- **gray-matter**: Parses front matter from markdown files
- **remark**: Processes markdown content
- **remark-html**: Converts markdown to HTML

## Reading Markdown Files

We can use the Node.js \`fs\` module to read markdown files:

\`\`\`javascript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
\`\`\`

## Converting Markdown to HTML

We can use remark to convert markdown content to HTML:

\`\`\`javascript
import { remark } from 'remark'
import html from 'remark-html'

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, \`\${id}.md\`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
\`\`\`

## Conclusion

Using markdown files as a data source for your Next.js blog is a great way to manage content. It's simple, flexible, and doesn't require a database or CMS.
      `,
    },
    {
      title: 'Styling Your Next.js Blog with Tailwind CSS',
      date: '2023-03-10',
      excerpt: 'Learn how to use Tailwind CSS to style your Next.js blog and create a beautiful UI.',
      coverImage: '/images/tailwind.jpg',
      content: `
# Styling Your Next.js Blog with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that can help you build custom designs without leaving your HTML. In this post, we'll learn how to use Tailwind CSS to style a Next.js blog.

## Setting Up Tailwind CSS

First, install Tailwind CSS and its dependencies:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Next, configure your \`tailwind.config.js\` file:

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

Then, add the Tailwind directives to your CSS file:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## Styling Components

Now you can use Tailwind's utility classes to style your components:

\`\`\`jsx
export default function BlogPost({ title, date, content }) {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <time className="text-gray-500 mb-6 block">{date}</time>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}
\`\`\`

## Custom Components

You can also create custom components using Tailwind's \`@apply\` directive:

\`\`\`css
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
  }
}
\`\`\`

## Conclusion

Tailwind CSS is a powerful tool for styling your Next.js blog. It allows you to create custom designs quickly and efficiently, without having to write custom CSS.
      `,
    },
  ]
  
  samplePosts.forEach((post, index) => {
    const fileName = `post-${index + 1}.md`
    const filePath = path.join(postsDirectory, fileName)
    
    const fileContent = `---
title: "${post.title}"
date: "${post.date}"
excerpt: "${post.excerpt}"
coverImage: "${post.coverImage}"
---

${post.content}
`
    
    fs.writeFileSync(filePath, fileContent)
  })
} 