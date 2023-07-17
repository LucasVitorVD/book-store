import styled from "styled-components";

export const HeaderFiltersWrapper = styled.div`
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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 1.25rem;

    .infos,
    .filters {
      gap: 2rem;
      margin-top: 1.25rem;
    }

    .cart-infos {
      gap: 1rem;
      padding: 0.625rem 1rem;
      margin-top: 1rem;

      div {
        gap: 0.625rem;
      }
    }
  }
`;
