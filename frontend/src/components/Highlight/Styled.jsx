import styled from "styled-components";

export const MainHighLightWrapper = styled.div`
  width: 38.3125rem;
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondary};

  h1 {
    color: #fff7ec;
    font-family: Ubuntu;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .first_highlight_container {
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

  .second_highlight_container {
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

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
