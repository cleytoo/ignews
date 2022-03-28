import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripejs";
import * as S from "./styles";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (status === "unauthenticated") {
      signIn("github");
      return;
    }

    if (session?.activeSubscription) {
      router.push("/posts");
      return;
    }

    // criação da checkout session
    try {
      const res = await api.post("/subscribe");
      const { sessionId } = res.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <S.Wrapper type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.Wrapper>
  );
};
