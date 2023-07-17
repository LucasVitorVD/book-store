import styled from "styled-components";

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28.25rem;
  height: 14.375rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  div {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    padding: 0.625rem;
  }

  .info p {
    width: 17.375rem;
  }

  .input-area {
    display: flex;
    flex-direction: column;

    input {
      width: 16.69319rem;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      border-radius: 0.25rem;
      border: 1px solid #e7d6ac;
    }

    button {
      font-size: 1.375rem;
      font-weight: 400;
      letter-spacing: -0.06188rem;
      padding: 0.625rem 1.5rem;
      border-radius: 1.25rem;
      border: none;
      background-color: ${({ theme }) => theme.colors.buttonsBg};
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;