import { useState } from "react";
import { HeaderFiltersWrapper } from "./Styled";
import { BsCart2 } from "react-icons/bs";
import Select from "../../Elements/Select";

const categoryOptions = [
  { value: '', label: "Shop by category" },
  { value: "action", label: "Action" },
  { value: "fantasy", label: "Fantasy" },
  { value: "romance", label: "Romance" },
  { value: "development", label: "Development" },
];

const langOptions = [
  { value: "eng", label: "English" },
  { value: "pt-br", label: "Portuguese" },
  { value: "it", label: "Italian" },
  { value: "jp", label: "Japenese" },
];

const currencyOptions = [
  { value: "USD$", label: "USD$" },
  { value: "R$", label: "R$" }
];

export default function HeaderFilters() {
  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("USD$");
  const [lang, setLang] = useState("");

  return (
    <HeaderFiltersWrapper>
      <div className="infos">
        <Select
          options={categoryOptions}
          selectedValue={category}
          setValue={setCategory}
        />
        <p>Coming soon</p>
      </div>

      <div className="filters">
        <Select options={langOptions} selectedValue={lang} setValue={setLang} />

        <Select
          options={currencyOptions}
          selectedValue={currency}
          setValue={setCurrency}
        />

        <div className="cart-infos">
          <span>{currency}0.00</span>
          <div>
            <span>0</span>
            <BsCart2 size={30} />
          </div>
        </div>
      </div>
    </HeaderFiltersWrapper>
  );
}
