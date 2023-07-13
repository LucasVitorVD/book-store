import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.colors.primary};

  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & a {
      display: flex;
      color: ${({ theme }) => theme.colors.text[0]};
      font-size: 1.5rem;
      font-weight: 400;
      text-decoration: none;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.text[0]};
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }

      &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
`;