import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderItemsWrapper } from "./Styled";
import Button from "../../Elements/Button";

export default function HeaderItems() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSearch() {
    if (query === "") return;

    navigate(`/search?q=${query.toLocaleLowerCase()}`);

    setQuery("");
    return;
  }

  return (
    <HeaderItemsWrapper>
      <h1>BookSpace</h1>
      <div>
        <input
          className="search_input"
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button text="Search" handleClick={handleSearch} />
      </div>
    </HeaderItemsWrapper>
  );
}
