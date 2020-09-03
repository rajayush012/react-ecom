import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/clothes.svg'
import { auth } from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
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
            </div>
        </div>
    )
}

export default Header;