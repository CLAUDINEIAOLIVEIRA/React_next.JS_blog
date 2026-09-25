// app/posts/data.js
// Lista central dos posts do blog. Cada post tem um "slug" (identificador
// usado na URL), um título e um resumo. Quando quiser adicionar um post novo,
// basta adicionar um novo objeto neste array.

const posts = [
  {
    slug: "aprendendo-nodejs",
    titulo: "Aprendendo Node.js",
    resumo:
      "Meus primeiros passos com Node.js: o que é, para que serve e como rodei meu primeiro script fora do navegador.",
  },
  {
    slug: "meu-primeiro-componente-react",
    titulo: "Meu primeiro componente React",
    resumo:
      "Como criei meu primeiro componente em React, entendendo props, JSX e por que dividir a interface em pedaços reutilizáveis.",
  },
  {
    slug: "migrando-para-o-nextjs",
    titulo: "Migrando para o Next.js",
    resumo:
      "Por que decidi migrar o projeto para o Next.js: rotas por pastas, App Router e a facilidade de criar páginas novas.",
  },
];

export default posts;
