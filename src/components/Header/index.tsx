import Link from "next/link";
import { useRouter } from "next/router";
import { SigninButton } from "../SignInButton";
import * as S from "./styles";

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <S.Wrapper>
      <S.Container>
        <img src="/images/logo.svg" alt="ig.news" />
        <S.Nav>
          <Link href="/">
            <S.NavItem active={asPath === "/"}>Home</S.NavItem>
          </Link>
          <Link href="/posts">
            <S.NavItem active={asPath.includes("/post")}>Posts</S.NavItem>
          </Link>
        </S.Nav>
        <SigninButton />
      </S.Container>
    </S.Wrapper>
  );
};
