import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 768px) {
    position: static;
    z-index: 0;
  }
`

export { HeaderWrapper };
