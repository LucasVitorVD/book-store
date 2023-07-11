import { FooterWrapper, ContentWrapper, CopyrightWrapper, ContactInfo, ContactTitle } from "./Styled"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper>
      <ContentWrapper>
        <ContactInfo>
          <ContactTitle>Endereço da Livraria</ContactTitle>
          <p>Telefone: XXXX-XXXX</p>
          <p>Email: vitorvicentelucas@gmail.com</p>
        </ContactInfo>
      </ContentWrapper>
      <CopyrightWrapper>
        <p>&copy; { currentYear } Livraria. Todos os direitos reservados. Lucas Vitor</p>
      </CopyrightWrapper>
    </FooterWrapper>
  )
}