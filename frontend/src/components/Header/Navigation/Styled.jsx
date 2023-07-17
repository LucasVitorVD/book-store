import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

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

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  #menu_hamburguer_icon {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

export const ResponsiveMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  ${({ showMenu }) =>
    showMenu
      ? css`
          animation-name: ${slideIn};
        `
      : css`
          animation-name: ${slideOut};
        `}

  .menu_items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    height: 100%;

    li {
      list-style: none;

      a {
        font-size: 2.5rem;
      }
    }
  }
`;
