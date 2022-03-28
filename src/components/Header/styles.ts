import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray-800"]};
`;

export const Container = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  button {
    margin-left: auto;
  }
`;

export const Nav = styled.nav`
  margin-left: 5rem;
  height: 5rem;

  a {
    cursor: pointer;
  }
`;

export const NavItem = styled.a<{ active?: boolean }>`
  ${({ theme, active }) => css`
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: ${active ? theme.colors["yellow-500"] : theme.colors["gray-300"]};
    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }

    :hover {
      color: ${theme.colors.white};
    }

    ${active &&
    css`
      color: ${theme.colors.white};
      font-weight: bold;
      ::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0px;
        background-color: ${theme.colors["yellow-500"]};
      }
    `}
  `}
`;
