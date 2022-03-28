import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import * as S from "./styles";

import { signIn, useSession, signOut } from "next-auth/react";

export const SigninButton = () => {
  const { data: session, status } = useSession();

  return status === "authenticated" ? (
    <S.Wrapper type="button" onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" style={{ marginLeft: "1rem" }} />
    </S.Wrapper>
  ) : (
    <S.Wrapper type="button" onClick={() => signIn("github")}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </S.Wrapper>
  );
};
