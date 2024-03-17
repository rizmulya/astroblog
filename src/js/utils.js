import { getCollection } from "astro:content";

export const posts = (await getCollection("blog")).map((post) => {
  const { slug, data } = post;
  const url = `/blog/${slug}`;
  return {
    frontmatter: { ...data },
    url,
  };
});

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

export function formatSearchPosts(posts, { sortByDate = true } = {}) {
  const formattedPosts = posts.map((post) => {
    const { title, date, description } = post.frontmatter;

    return {
      title,
      date,
      description,
      url: post.url,
    };
  });

  if (sortByDate) {
    formattedPosts.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }

  return formattedPosts;
}
