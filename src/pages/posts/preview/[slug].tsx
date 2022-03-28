import { GetStaticPaths, GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { RichText } from "prismic-dom";
import { useEffect } from "react";
import { getPrismicClient } from "../../../services/prismic";
import * as S from "./styles";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updated_at: string;
  };
}

export default function PostPreviwe({ post }: PostPreviewProps) {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
      return;
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{`${post.title} | ignews`}</title>
      </Head>
      <S.Wrapper>
        <S.Post>
          <h1>{post.title}</h1>
          <time>{post.updated_at}</time>
          <S.PostContent
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <S.ContinueReading>
            Wanna contiue reading?
            <Link href="/">
              <a>Subscribe now 🙌</a>
            </Link>
          </S.ContinueReading>
        </S.Post>
      </S.Wrapper>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const prismic = getPrismicClient();

  const res = await prismic.getByUID("post", String(slug));

  const post = {
    slug,
    title: RichText.asText(res.data.title),
    content: RichText.asHtml(res.data.content.splice(0, 3)),
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
    revalidate: 60 * 30, //30minutes
  };
};
