import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #FFF7EC;
  padding: 20px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  margin-right: 20px;
`;

const ContactTitle = styled.h4`
  margin-bottom: 5px;
`;

const CopyrightWrapper = styled.div`
  font-size: 12px;
  color: #A13842;
`;

export { FooterWrapper, ContentWrapper, ContactInfo, ContactTitle, CopyrightWrapper }