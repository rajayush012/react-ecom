import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/clothes.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';



const Header = ({currentUser,hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT US</Link>
                {
                    currentUser ?
                    <Link className='option' onClick={()=> auth.signOut()} to='/shop'>SIGN OUT</Link>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                !hidden ?
                <CartDropDown />
                :
                null
            }
            
        </div>
    )
}

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);