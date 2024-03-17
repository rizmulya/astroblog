import rss from "@astrojs/rss";
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const collectionResult = await getCollection('blog');
  const posts = collectionResult.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    stylesheet: "/rss/styles.xsl",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: `
        <author>${post.data.author}</author>
      `,
    })),
  });
}
