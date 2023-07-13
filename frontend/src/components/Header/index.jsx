import { HeaderWrapper } from "./Styled";
import Navigation from "./Navigation";
import HeaderItems from "./HeaderItems";
import HeaderFilters from "./HeaderFilters";

export default function Header() {
  return (
    <HeaderWrapper>
      <Navigation />
      <HeaderItems />
      <HeaderFilters />
    </HeaderWrapper>
  );
}
