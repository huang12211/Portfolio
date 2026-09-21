// import { useTranslations } from 'next-intl';
// import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Image from 'next/image';
import Link from 'next/link';

import { FigmaEmbed } from '@/components/FigmaEmbed';

export async function generateMetadata() {
  // const t = await getTranslations({
  //   locale: props.params.locale,
  //   namespace: 'Synthe',
  // });

  return {
    title: 'Elaine\'s Easecipes',
    description: 'Personal Food Website',
  };
}

export default function Design() {
  return (
    <>
      <div className="bg-gray-100 bg-opacity-30">
        <div className="bg-gray-200">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-6 py-16 md:px-16">
            <div className="flex flex-col gap-2">
              <h1>Elaine's Easecipes</h1>
              <h2 className="text-emerald-700">
                A Website of all of my Family's Favourite Food Recipes
              </h2>
            </div>
            <div className="caseIntro">
              <p>
                This is a personal project where I keep a record of all recipes that I have collected from my time with friends and loved ones.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl gap-10 px-6 py-16 md:px-16">
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
            <h4>The Vision</h4>
            <p className="text-lg">
              Create a website containing all of my favourite recipes and associated stories that I've collected from people I've met over the years.
              The website includes some a friendly
              {' '}
              <span className="font-medium text-emerald-700">Pitaya Pal AI Assistant</span>
              {' '}
              that provides recipe recommendations using RAG over the recipe database.
            </p>
          </div>
          {/* <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
            <h4>My Role</h4>
            <p className="text-lg">
              Designer, developer and principal user.
            </p>
          </div> */}
        </div>
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-lg md:px-16">
          <h3 className="pt-0 text-center">Context</h3>
          <p>
            This website's main purpose is to act as a source of inspiration whenever I find myself getting tired of reusing the same 7 recipes that come top of mind when I'm out grocery shopping.
            It's secondary purpose is the act as a reference for friends and family who ask me for the recipe to a specific dish that I've made for them in the past.
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-lg md:px-16">
          <h3 className="text-center">Design Phase</h3>
          <h4 className="text-lg font-semibold">Wireframes in Figma</h4>
          <div>
            <FigmaEmbed
              title="figma low fidelity prototype"
              width={320}
              height={650}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpijcVhQPrJIuNDDJV64tVJ%2FWireFrames---Elaine's-Eats%3Ftype%3Ddesign%26node-id%3D10-1131%26scaling%3Dscale-down%26page-id%3D10%253A356%26starting-point-node-id%3D10%253A1131"
              className="mx-auto max-h-screen"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 bg-opacity-30">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-lg md:px-16">
          <h3 className="text-center">Development Phase</h3>
          <h4>Tech Stack</h4>
          <p>
            The website has been written using the Next.js framework and was built using:
          </p>
          <ul className="list-outside list-disc pl-10">
            <li>Frontend: Next.js, React, Tailwind CSS, Heroicons</li>
            <li>Backend: Next.js</li>
            <li>Database: SQLite via Drizzle ORM for better-sqlite3</li>
            <li>Authentication: JWT + bcryptjs </li>
            <li>AI / ML: Vercel AI SDK (chat streaming & test embeddings)</li>
            <li>Observability: Langfuse</li>
            <li>Deployment: Railway (persistent volume for SQLite)</li>
          </ul>
          <div className="flex flex-col gap-1">
            <h4 className="pt-4">Architecture Decisions</h4>
            <h5 className="text-gray-600 underline">SQLite & Persistent Volume:</h5>
            <p>
              SQLite was chosen because the recipe database will only contain a few hundred recipes and there will only be one writer (me).
              The database is not large enough to warrant a Postgres instance which would have required a separate service, connection pool, and an extra monthly expense.
              This requires the use of a persistent volume which was why Railway was chosen as the deployment platform.
            </p>
            <h5 className="text-gray-600 underline">How Pitaya Pal Works:</h5>
            <p>
              Every recipe is condensed to only the most relevant information (e.g. title, tags, cook time, directions, ingredients, etc.) which gets turned into an embedding using a Gemini embedding model which get stored in a separate SQLite table.
              When you ask Pitaya Pal something, a Hybrid RAG pipeline is invoked to retrieve the top 10 most relevant recipes in the database.
              The pipeline includes BM25 for sparse keyword matching and vector embeddings for semantic search.
              Keyword matching is better at finding exact ingredients and dish names, which is important because I use the Chinese names of Chinese ingredients because there's no standardized name for these ingredients in English.
              On the other hand, semantic search catches abstract meanings (e.g. "Give me a comfort food recipe").
              Cohere's Rerank Multilingual v3.0 is used to re-score and rank the recipes that were retrieved from both methods.
              Those top 10 recipes get pasted into the prompt as context, and the Inference LLM model answers using them.
              The answer streams back through the Vercel AI SDK so you see it appear word by word, and Langfuse traces the whole thing so I can go back and see what got retrieved when an answer looks off.
            </p>
            <Image
              src="/assets/images/langfuse-pitaya-pal-2.webp"
              alt="Langfuse Tracing of a Query sent to Pitaya Pal"
              width="2770"
              height="1324"
              className="mx-auto my-4 h-auto w-full rounded-xl border border-gray-200"
            />
            <h5 className="text-gray-600 underline">Langfuse Observability & Evaluators:</h5>
            <p>
              Reading traces one by one doesn't scale, so I added 5 automated evaluators that score every conversation.
              3 of the evaluators check the RAG pipeline at each stage. Together they evaluate context precision, groundedness, and answer relevance.
              The 2 other evaluators are there to flag any user frustration or user disagreement with Pitaya Pal's responses.
            </p>
            <Image
              src="/assets/images/langfuse-evaluators.webp"
              alt="Langfuse Evaluators"
              width="1864"
              height="659"
              className="mx-auto my-4 h-auto w-full rounded-xl border border-gray-200"
            />
          </div>
        </div>
      </div>

      {/* <div className="bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-lg md:px-16">
          <h3 className="text-center">What I've Learnt</h3>
          <p>
            This product gave me the chance to learn the essentials web development.
            It's been the project through which I've been learning frontend, backend, AI, monitoring, deployment concepts.
            Later features have been developed using AI-native methods.
          </p>
        </div>
      </div> */}

      <div className="bg-white">
        <div className="mx-auto my-10 grid max-w-screen-xl gap-4 px-6 text-lg md:px-16">
          <h3 className="text-center">The Current Product</h3>
          <p>
            Please click on the following link to peruse the current state of the website:
            <Link
              href="https://elaineseasecipes.com/"
              target="_blank>"
              className="text-sky-500 hover:underline"
            >
              {' '}
              Elaine's Easecipes
            </Link>
          </p>
          <Image
            src="/assets/images/homePageFoodWebsite.png"
            alt="Elaine's Easecipes Home page"
            width="600"
            height="1024"
            className="mx-auto h-auto w-full rounded-xl border border-gray-200"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Image
              src="/assets/images/pitaya-pal-2.webp"
              alt="Search Elaine's Easecipes with Pitaya Pal"
              width="1404"
              height="1652"
              className="mx-auto h-auto w-full rounded-xl border border-gray-200"
            />
            <Image
              src="/assets/images/recipePage.png"
              alt="Recipe Page for Thai Chicken Peanut Noodles"
              width="400"
              height="1024"
              className="mx-auto h-auto w-full rounded-xl border border-gray-200 md:w-[90%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
