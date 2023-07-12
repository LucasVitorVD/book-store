import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LiaHomeSolid } from 'react-icons/lia'
import { BsCart2 } from 'react-icons/bs'
import { HeaderWrapper, NavWrapper, HeaderItemsWrapper, HeaderFiltersWrapper } from './Styled'
import Button from '../Elements/Button'

export default function Header() { 
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function handleSearch() {
    if (query === '') return

    return navigate(`/search?q=${query.toLocaleLowerCase()}`)
  }

  return (
    <HeaderWrapper>
      <NavWrapper>
        <div>
          <Link to={"/"}>
            <LiaHomeSolid size={30} />
          </Link>
          <Link to={"#"}>Contact</Link>
          <Link to={"#"}>Help</Link>
        </div>

        <div>
          <Link to={"#"}>Wishlist</Link>
          <Link to={"#"}>My orders</Link>
          <Link to={"#"}>Sign in/ Sign up</Link>
        </div>
      </NavWrapper>
      <HeaderItemsWrapper >
        <h1>BookSpace</h1>
        <div>
          <input className='search_input' type="search" onChange={(e) => setQuery(e.target.value)} />
          <Button text="Search" handleClick={handleSearch} />
        </div>
      </HeaderItemsWrapper>
      <HeaderFiltersWrapper>
        <div className='infos'>
          <select name="category" id="category">
            <option>Shop by category</option>
          </select>
          <p>Coming soon</p>
        </div>

        <div className='filters'>
          <select name="lang" id="lang">
            <option value="english">English</option>
            <option value="portugues">Portugues</option>
          </select>

          <select name="currency" id="currency">
            <option value="$usd">$USD</option>
            <option value="r$">R$</option>
          </select>

          <div className='cart-infos'>
            <span>USD$0.00</span>
            <div>
              <span>0</span>
              <BsCart2 size={30} />
            </div>
          </div>
        </div>
      </HeaderFiltersWrapper>
    </HeaderWrapper>
  )
}
