import { PostCard } from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard className={styles.post} key={post.id} post={post} />
      ))}   
    </div>
  );
}
