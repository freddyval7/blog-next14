import { addPost, deletePost } from "@/lib/action"

import React from 'react'

export default function ServerActionPage() {

  return (
    <div>
        <form action={addPost}>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="desc" placeholder="Description" />
            <input type="text" name="slug" placeholder="Slug" />
            <input type="text" name="userId" placeholder="Author" />
            <button type="submit">Add Post</button>
        </form>

        <form action={deletePost}>
            <input type="text" name="id" placeholder="Post ID" />
            <button type="submit">Delete Post</button>
        </form>
    </div>
  )
}
