import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/clothes.svg'

const Header = () => {
    return (
        <div className='header'>
            <Link classNAme='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT US</Link>
            </div>
        </div>
    )
}

export default Header;