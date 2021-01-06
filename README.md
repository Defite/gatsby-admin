# Gatsby admin [WIP]

## Simple admin interface for Gatsby based blog

Converts form data into markdown files

## Usage

For now there is one option in `./config.js`:

`contentPath` - folder where to store (read/write/delete) your posts.

To start, type `node server.js`. This will start server, which helps you to create new posts.

Here is an example of body of post endpoint:

```
{
    "title": "Post from postman",
    "date": "2021-01-04T16:24:03.284Z",
    "type": "text",
    "slug": "post-from-postman",
    "content": "# This is post from Postman utility"
}
```

Send POST request and this will automatically create Markdown file in your content folder:

```
---
title: Post from postman
date: 2021-01-04T16:24:03.284Z
type: text
slug: post-from-postman
---

# This is post from Postman utility
```
