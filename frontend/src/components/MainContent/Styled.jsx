import styled from "styled-components";

export const MainContainer = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  margin-left: 270px;
`;

export const HighlightSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;

  & .main_highlight {
    width: 38.3125rem;
    height: auto;
    background-color: ${({ theme }) => theme.colors.secondary};

    h1 {
      color: #fff7ec;
      font-family: Ubuntu;
      font-size: 2.5rem;
      font-weight: 700;
    }
  }

  & .first_highlight_container {
    display: flex;
    justify-content: space-between;
    align-items: self-start;
    height: 8rem;
    padding: 0.5rem;

    div {
      position: relative;

      h1 {
        position: absolute;
        top: 35px;
        left: 110px;
        transform: rotate(-8.99deg);
      }
    }
  }

  & .second_highlight_container {
    display: flex;
    justify-content: space-between;
    align-items: self-start;
    height: 5rem;
    padding: 0.5rem;

    p {
      position: relative;
      top: 40px;
    }

    div {
      position: relative;
      top: -80px;
      left: -25px;

      h1 {
        position: absolute;
        top: 60px;
        left: 85px;
        transform: rotate(3.439deg);
      }
    }
  }
`
export const NewsletterContainer = styled.div`
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
      border: 1px solid #E7D6AC;
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
`

export const BookSection = styled.section``