# Next.js Blog

A simple blog built with Next.js, featuring:

- App Router for navigation
- Markdown blog posts with gray-matter and remark
- Responsive design with Tailwind CSS
- Image support with Next.js Image component

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains all the Next.js pages and components
  - `components/`: Reusable UI components
  - `lib/`: Utility functions for handling blog posts
  - `blog/`: Blog pages
  - `about/`: About page
- `posts/`: Markdown files for blog posts
- `public/`: Static assets like images

## Adding New Blog Posts

To add a new blog post, create a new markdown file in the `posts` directory with the following format:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "A brief description of your post"
coverImage: "/images/your-image.jpg"
---

Your markdown content here...
```

## Features

- **Responsive Design**: The blog is fully responsive and works on all devices
- **Markdown Support**: Write your blog posts in markdown
- **Dynamic Routing**: Each blog post has its own URL
- **Static Generation**: Blog posts are statically generated for better performance
- **Tailwind CSS**: Utility-first CSS framework for styling

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial. 