import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;

  nav {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem;
    background-color: ${({ theme }) => theme.colors.primary};

    div {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      & a {
        color: ${({ theme }) => theme.colors.text[0]};
        font-size: 1.5rem;
        font-weight: 400;
        text-decoration: none;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.colors.text[0]};
          bottom: 0;
          left: 0;
          transform-origin: right;
          transform: scaleX(0);
          transition: transform .3s ease-in-out;
        }

        &:hover::before {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
  }

  .header_items {
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

    & .search_container {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      & input {
        width: 37.6875rem;
        border: none;
        font-size: 1.1rem;
        padding: .5rem;
        border-radius: 0.25rem;
        border: 1px solid #E7D6AC;
      }
    }
  }

  .header_filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.8rem;
    font-size: 1.5rem;

    .infos, .filters {
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
      border-radius: .5rem;
      padding: 0.625rem 1.5rem 0.625rem 1.5rem;

      div {
        display: flex;
        align-items: center;
        gap: 1.25rem;
      }
    }
  }
`