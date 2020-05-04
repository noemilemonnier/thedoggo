import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/* To add when functioning
<ul className="actions vertical">
                <li><a href="/404" className="button special fit">Get Started</a></li>
                <li><a href="/404" className="button fit">Log In</a></li>
            </ul> 
*/
const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/breeds">Breeds</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/breeders">Breeders</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/rescues">Rescues</Link></li>
            </ul> 
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
