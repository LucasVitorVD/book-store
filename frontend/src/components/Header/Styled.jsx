import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const NavWrapper = styled.nav`
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

const HeaderItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
  padding: 1.25rem 1.8rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  & h1 {
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.1125rem;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & input {
      width: 37.6875rem;
      border: none;
      font-size: 1.1rem;
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid #e7d6ac;
    }
  }
`;

const HeaderFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.8rem;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};

  .infos,
  .filters {
    display: flex;
    gap: 5rem;
    align-items: center;
  }

  select {
    padding: 0 1rem;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    outline: none;
    cursor: pointer;
  }

  .cart-infos {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 0.5rem;
    padding: 0.625rem 1.5rem 0.625rem 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }
  }
`;

export { HeaderWrapper, NavWrapper, HeaderItemsWrapper, HeaderFiltersWrapper };
