import { getCollection } from "astro:content";
import { slugify } from "../../js/utils";

async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    date: post.data.date,
    category: { get: post.data.category, slug: slugify(post.data.category) },
    image: post.data.image,
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
