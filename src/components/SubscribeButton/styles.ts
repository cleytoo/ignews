import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    height: 4rem;
    width: 260px;
    border: 0;
    border-radius: 2rem;
    background-color: ${theme.colors["yellow-500"]};
    color: ${theme.colors["gray-900"]};
    font-size: 1.25rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
