import AppLogo from '../../svgs/ebay-icon.svg';
import CartLogo from '../../svgs/cart.svg';
import UserLogin from '../../svgs/login.svg';
import './navigation.css'

export default function Navigation() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={AppLogo} alt="App Logo" />
      </div>
      <div className="navbar-icons">
        <span>Bags</span>
        <span>Pants</span>
        <span>Shoes</span>
      </div>
      <div className='navbar-right-icons'>
        <img src={CartLogo} alt="Cart Logo" />
        <img src={UserLogin} alt="User Logo" />
      </div>
    </div>
  )
}
