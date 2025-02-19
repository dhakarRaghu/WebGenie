"use client";

import React, { useState, JSX } from "react";
import clsx from "clsx";
import { Navbar } from "@/components/Navbar";
const docsStructure = [
  {
    category: "Getting Started",
    items: [
        {
            slug: "introduction",
            title: "Introduction",
            content: (
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white">Introduction</h2>
            
          
                <pre className="bg-neutral-800 p-4 text-sm text-gray-200 rounded-md">
                  {`This documentation covers everything you need to know about setting up and customizing your generated 
web project using WebGenie. Gain insights on frameworks, ORMs, configuration, and more.`}
                </pre>
          
                <h2 className="text-2xl font-bold text-white">Prerequisites</h2>
                <p className="text-gray-300">
                  Make sure you have the latest Node.js and npm installed on your machine.
                </p>
                <p className="text-gray-300">
                  WebGenie is designed to work with Node.js v18+.
                </p>
          
                <h2 className="text-2xl font-bold text-white">Project Structure</h2>
                <pre className="bg-neutral-800 p-4 text-sm text-gray-200 rounded-md">
                  {`my-project/
          ├── src/
          │   ├── app/
          │   ├── components/
          │   └── lib/
          ├── public/
          ├── package.json
          └── README.md`}
                </pre>
          
                <div className="bg-yellow-900 text-yellow-400 p-4 mt-4 rounded-lg">
                  ⚠️ Remember to set up your environment variables before running the project in production.
                </div>
              </div>
            ),
          }
        ,          
      {
        slug: "quick-start",
        title: "Quick Start",
        content: (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Quick Start</h2>
            <p className="text-gray-300">Create a new project:</p>
                <pre className="bg-neutral-800 p-4 text-sm text-gray-200 rounded-md">
                <p className="text-gray-300">npm i -g @raghvendra_04/create-my-project  create-my-project</p>
                </pre>
            <pre className="bg-neutral-800 p-4 text-sm text-gray-200 rounded-md">
{`cd Project_Name
npm install
npm run dev
`}
            </pre>
            <pre className="bg-neutral-800 p-4 text-sm text-gray-200 rounded-md">
        <p className="text-gray-300">Choices Your Tech Stack :</p>
            </pre>
            <pre className="bg-neutral-800 p-4 text-sm text-gray-200 rounded-md">
{`Frameworks : Next.js, T3 , React, Vue
Orm : Prisma, Drizzle ,Mongoose
Authentications : NEXT-AUTH, BetterAuth
Components : shadcn
Prebuild : LoginPage
`}
</pre>
            <p className="text-gray-300">
              This will create a new project with default settings. Check the
              configuration section to learn about customization.
            </p>
          </div>
        ),
      },
      {
        slug: "installation",
        title: "Installation",
        content: (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Installation</h2>
            <p className="text-gray-300">
              Make sure you have the latest <strong>Node.js</strong> (v18+) and a package
              manager like <strong>npm</strong> or <strong>yarn</strong>.
            </p>
            <p className="text-gray-300">
              Then install dependencies once you’ve generated your project:
            </p>
            <pre className="bg-neutral-800 p-4 text-sm text-gray-200 rounded-md">
{`npm install
npm run dev
`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    category: "Frameworks",
    items: [
      {
        slug: "nextjs-setup",
        title: "Next.js Setup",
        content: (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Next.js Setup</h2>
            <p className="text-gray-300">
              By default, WebGenie can scaffold a Next.js application in the
              <code className="text-cyan-400 ml-1">app/</code> directory with Tailwind,
              TypeScript, ESLint, and more. Modify your
              <code className="text-cyan-400 ml-1">next.config.js</code> as needed.
            </p>

            <p className="text-gray-300">Choices Your Tech Stack :</p> 
            <pre className="bg-neutral-800 p-4 text-sm text-gray-200 rounded-md">
{`
Frameworks : Next.js
Orm : Prisma
Authentications : NEXT-AUTH , BetterAuth
Prebuild : Schema for Auth
Components : shadcn
LoginPage
`}
</pre>
<div className="bg-yellow-900 text-yellow-400 p-4 mt-4 rounded-lg">
                  ⚠️ Remember to choose SRC directory for code.
                </div>
          </div>
        ),
      },
      {
        slug: "react-config",
        title: "React Configuration",
        content: (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">React Configuration</h2>
            <p className="text-gray-300">
              If you choose React (non-Next.js), you'll get a classic SPA structure with
              Create React App–style (or Vite-based) config. Look for
              <code className="text-cyan-400 ml-1">src/</code> directory for code.
            </p>
          </div>
        ),
      },
      {
        slug: "vue-integration",
        title: "Vue Integration",
        content: (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Vue Integration</h2>
            <p className="text-gray-300">
              WebGenie can optionally scaffold a Vue-based project with official CLI and
              included Babel/ESLint config. Explore your
              <code className="text-cyan-400 ml-1">vue.config.js</code> for dev server
              setup.
            </p>
          </div>
        ),
      },
    ],
  },

  {
    category: "Database & ORM",
    items: [
      {
        slug: "prisma-guide",
        title: "Prisma Guide",
        content: (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Prisma Guide</h2>
            <p className="text-gray-300">
              Prisma is a type-safe ORM for SQL or Mongo. Your
              <code className="text-cyan-400 ml-1">schema.prisma</code> file will reside in
              <code className="text-cyan-400 ml-1">/prisma</code>. Run
              <code className="text-cyan-400 ml-1">npx prisma migrate dev</code> to manage
              migrations.
            </p>
          </div>
        ),
      },
      {
        slug: "mongoose-setup",
        title: "Mongoose Setup",
        content: (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Mongoose Setup</h2>
            <p className="text-gray-300">
              For MongoDB, WebGenie can install Mongoose and create a sample model under
              <code className="text-cyan-400 ml-1">/models</code>. Update
              <code className="text-cyan-400 ml-1">DB_URI</code> in your
              <code className="text-cyan-400 ml-1">.env</code> file to connect.
            </p>
          </div>
        ),
      },
      {
        slug: "migration-guide",
        title: "Migration Guide",
        content: (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Migration Guide</h2>
            <p className="text-gray-300">
              Each ORM supports migrations differently. For Prisma, run
              <code className="text-cyan-400 ml-1">prisma migrate dev</code>. For
              Mongoose, you'll track changes manually or with third-party migration libs.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    category: "Authentication",
    items: [
      {
        slug: "next-auth",
        title: "NextAuth.js",
        content: (
            <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              NextAuth
            </h3>
            <p className="text-gray-300 mb-4">
              WebGenie includes optional setup for user authentication. We
              currently support:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              <li>
                <strong className="text-white">NextAuth.js</strong> for
                Next.js-based apps
              </li>
              <li>
                <strong className="text-white">JWT-based</strong> auth for
                React, Angular, or Vue
              </li>
            </ul>
            <p className="text-gray-300 mb-2">
              If you selected authentication in the wizard, you’ll see new
              files like:
            </p>
            <pre className="bg-neutral-900 text-gray-200 p-4 rounded-lg text-sm">
{`/src
/app
  /api
    /auth
      [...nextauth].ts
    ...
`}
            </pre>
            <div className="bg-yellow-900 text-yellow-400 p-4 mt-4 rounded-lg">
              ⚠️ Remember to set <code>NEXTAUTH_SECRET</code> or
              <code>JWT_SECRET</code> in your environment variables for
              production!
            </div>
          </div>
        ),
      },
      {
        slug: "better-auth",
        title: "BetterAuth",
        content: (
            <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              BetterAuth
            </h3>
            <p className="text-gray-300 mb-4">
              WebGenie includes optional setup for user authentication. We
              currently support:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              <li>
                <strong className="text-white">BetterAuth</strong> for
                Next.js-based apps
              </li>
              <li>
                <strong className="text-white">Orm</strong> It can be Prisma, Drizzle , ...
              </li>
            </ul>
            <p className="text-gray-300 mb-2">
              If you selected authentication in the wizard, you’ll see new
              files like:
            </p>
            <pre className="bg-neutral-900 text-gray-200 p-4 rounded-lg text-sm">
{`/src
/app
  /api
    /auth
      /[...all]
       route.ts
    ...


/lib
  /auth-client.ts
  /auth.ts

`}
            </pre>
            <div className="bg-yellow-900 text-yellow-400 p-4 mt-4 rounded-lg">
              ⚠️ Remember to set <code>BETTERAUTH_SECRET</code> or
              <code> BASE_URL</code> in your environment variables for
              production!
            </div>
          </div>
        ),
      },
    ],
  },
];

// Type representing each sub-section item
interface DocItem {
  slug: string;
  title: string;
  content: React.ReactNode;
}

// Type representing categories + sub-sections
interface DocCategory {
  category: string;
  items: DocItem[];
}

export default function DocsPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    docsStructure[0].category
  );
  const [activeSlug, setActiveSlug] = useState<string>(
    docsStructure[0].items[0].slug
  );

  // Find the doc category object
  const currentCategory: DocCategory | undefined = docsStructure.find(
    (cat) => cat.category === selectedCategory
  );

  // Find the sub-section item
  const currentItem: DocItem | undefined = currentCategory?.items.find(
    (item) => item.slug === activeSlug
  );

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100">
       <Navbar></Navbar>
        <div className="py-10 text-center">
            <h1 className="text-4xl font-bold mt-10 text-white">
            </h1>
            <p className="text-gray-300 text-lg mt-2">
            Everything you need to know about your generated project
            </p>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 hidden md:block">
          <nav className="space-y-6">
            {docsStructure.map((cat) => (
              <div key={cat.category}>
                <h3 className="mb-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {cat.category}
                </h3>
                <ul className="space-y-1 ml-2">
                  {cat.items.map((item) => (
                    <li key={item.slug}>
                      <button
                        onClick={() => {
                          setSelectedCategory(cat.category);
                          setActiveSlug(item.slug);
                        }}
                        className={clsx(
                          "block w-full text-left px-3 py-1 rounded hover:bg-neutral-800",
                          activeSlug === item.slug
                            ? "bg-neutral-800 text-cyan-300"
                            : "text-gray-300"
                        )}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-neutral-800/20 p-6 rounded-md">
          {currentItem?.content ? (
            <div className="space-y-6">
              {/* Render whichever sub-section is active */}
              {currentItem.content}
            </div>
          ) : (
            <div className="text-gray-300">Please select a section</div>
          )}
        </main>
      </div>
    </div>
  );
}
