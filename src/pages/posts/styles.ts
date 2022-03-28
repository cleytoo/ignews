import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const PostList = styled.div`
  max-width: 720px;
  margin: 5rem auto 0;

  a {
    cursor: pointer;
  }
`;

export const Post = styled.a`
  display: block;
  transition: color 0.2 linear;

  & + a {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #323232;
  }

  time {
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors["gray-300"]};
  }

  strong {
    display: block;
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 2rem;
  }

  p {
    color: ${({ theme }) => theme.colors["gray-300"]};
    margin-top: 0.5rem;
    line-height: 1.6rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors["yellow-500"]};
  }
`;
