import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    height: 3rem;
    border-radius: 3rem;
    background-color: ${theme.colors["gray-850"]};
    border: 0px;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;
    color: ${theme.colors.white};
    font-weight: bold;

    svg {
      height: 18px;
      width: 18px;
    }

    svg:first-child {
      margin-right: 1rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
