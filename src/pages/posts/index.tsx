import Head from "next/head";
import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../services/prismic";

import * as S from "./styles";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updated_at: string;
};

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>
      <S.Wrapper>
        <S.PostList>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <S.Post>
                <time>{post.updated_at}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </S.Post>
            </Link>
          ))}
        </S.PostList>
      </S.Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const res = await prismic.getAllByType("post");

  const posts = res.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updated_at: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
