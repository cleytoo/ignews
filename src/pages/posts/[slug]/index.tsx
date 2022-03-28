import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";
import * as S from "./styles";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updated_at: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{`${post.title} | ignews`}</title>
      </Head>
      <S.Wrapper>
        <S.Post>
          <h1>{post.title}</h1>
          <time>{post.updated_at}</time>
          <S.PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </S.Post>
      </S.Wrapper>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params: { slug },
}) => {
  const session = await getSession({ req });

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const prismic = getPrismicClient();

  const res = await prismic.getByUID("post", String(slug));

  const post = {
    slug,
    title: RichText.asText(res.data.title),
    content: RichText.asHtml(res.data.content),
    updated_at: new Date(res.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
  };
};
