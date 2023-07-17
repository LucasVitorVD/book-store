import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderItemsWrapper } from "./Styled";
import Button from "../../Elements/Button";
import { Link } from "react-router-dom";

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
      <Link to={"/"}>
        <h1>BookSpace</h1>
      </Link>
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
