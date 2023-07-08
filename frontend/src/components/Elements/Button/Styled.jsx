import styled from "styled-components";

export const ButtonElement = styled.button`
  padding: 0.625rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.buttonsBg};
  border: none;
  border-radius: 20px;
  text-align: center;
  font-size: 1.375rem;
  font-weight: 400;
  letter-spacing: -0.06188rem;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
