import { getCollection } from "astro:content";

async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    date: post.data.date
  }));
}

export async function GET() {
  return new Response(JSON.stringify(await getPosts()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
