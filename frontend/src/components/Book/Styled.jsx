import styled from "styled-components";

export const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem;

  h4, span {
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  figure {
    width: 9rem;

    img {
      width: 100%;
      height: auto;
    }
  }
`