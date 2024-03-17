---
layout: "../../layouts/BlogPostLayout.astro"
title: how to write markdown.md systax
date: 2024-03-13
author: tes
image: { src: "/images/post-1.jpg", alt: "A picture of a coder" }
description: example how to write markdown.md syntax
draft: true
category: example
---

1). Firstly, look at "draft: true" above. This means the post will not be shown on the website but can be accessed via the URL /blog/example.

2). How to write HTML code:

Best practice is to use triple backticks:

```
<div>
    <script>alert("oke")</script>
</div>
```

Or encode it in HTML:

<code class="language-html">
&lt;div&gt;
    &lt;script&gt;alert(&quot;oke&quot;)&lt;/script&gt;
&lt;/div&gt;
</code>

3). How to write code in other languages:

Simply place the code inside a code tag and add a class for the language, like so:

python example :

<code class="language-python">
print("Hello World!")
</code>

or javascript example :

<code class="language-javascript">
console.log("Hello World!")
</code>
