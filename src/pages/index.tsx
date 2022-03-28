import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import * as S from "./Home/styles";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <S.Wrapper>
        <S.Content>
          <span>🙌 Hey, welcome</span>
          <h1>
            News about <br /> the <span>React</span> world
          </h1>
          <p>
            Get access to all the puplications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </S.Content>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </S.Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KHAX8IPRXVGnhdv157mftDg");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24hrs
  };
};
