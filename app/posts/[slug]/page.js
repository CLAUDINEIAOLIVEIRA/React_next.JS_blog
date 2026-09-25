// app/posts/[slug]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "../data";
import styles from "../posts.module.css";

export default async function PostDetalhe({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    // Mostra a página 404 padrão do Next.js quando o slug não existe
    notFound();
  }

  return (
    <main>
      <h1>{post.titulo}</h1>
      <p className={styles.resumo}>{post.resumo}</p>
      <p>Aqui ficaria o conteúdo completo deste post.</p>
      <Link href="/posts">← Voltar para Posts</Link>
    </main>
  );
}
