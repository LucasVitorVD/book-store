import { LiaHomeSolid } from 'react-icons/lia'
import { BsCart2 } from 'react-icons/bs'
import { StyledHeader } from './Styled'

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <div>
          <LiaHomeSolid size={30} />
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </div>

        <div>
          <a href="#">Wishlist</a>
          <a href="#">My orders</a>
          <a href="#">Sign in/ Sign up</a>
        </div>
      </nav>
      <div className="header_items">
        <h1>BookSpace</h1>
        <div className='search_container'>
          <input className='search_input' type="search" />
          <button>Search</button>
        </div>
      </div>
      <div className="header_filters">
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
      </div>
    </StyledHeader>
  )
}
