import styled from "styled-components";

export const HeaderItemsWrapper = styled.div`
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