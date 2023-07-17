import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HighlightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem 2.5rem;
`;

export const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  & #bestselling-title {
    margin: 0 0 1.2rem 1.5rem;
  }

  .books {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
  }
`;