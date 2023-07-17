import styled from "styled-components"

const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 0.625rem 1.25rem;
  width: 16rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow-x: hidden;

  & a {
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.text[0]};
    color: ${({ theme }) => theme.colors.text[1]};
    text-decoration: none;
    font-size: 1.375rem;
    font-weight: 400;
    letter-spacing: -0.06188rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    margin: 0 -.25rem;
    padding: 0 .25rem;

    &:hover {
      box-shadow: inset 200px 0 0 0 ${({ theme }) => theme.colors.text[0]};
      color: white;
    }
  }

  @media screen and (max-width: 1020px) {
    display: none;
  }
`

export default SidebarContainer