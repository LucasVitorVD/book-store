import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`

export const ResultSectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`