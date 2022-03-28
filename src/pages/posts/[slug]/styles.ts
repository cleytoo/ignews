import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Post = styled.article`
  max-width: 720px;
  margin: 5rem auto 0;

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
  }

  time {
    display: block;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
    margin-top: 1.5rem;
  }
`;

export const PostContent = styled.div`
  margin-top: 2rem;
  line-height: 2rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors["gray-100"]};
  padding-bottom: 2rem;

  p,
  ul {
    margin: 1.5rem 0;
  }

  ul {
    padding-left: 1.5rem;

    li {
      margin: 0.5rem 0;
    }
  }
`;
