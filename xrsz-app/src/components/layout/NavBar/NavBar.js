import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './_NavBar.scss';
import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';

export const NavBar = ({ title }) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { isAuthenticated, logout } = authContext;
    const { setAlert } = alertContext

    const handleLogout = () => {
        logout();
        setAlert('Log out Successful')
    }
    const authLinks = (
        <Menu pointing size="huge" >
            <Menu.Item 
            name="XRSZ"
            >
                <Link to="/workout">{title}</Link>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item onClick={handleLogout}>
                    Logout
                </Menu.Item>
                <Menu.Item
                >
                    <Link to="/profile">Profile</Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )

    const guestLinks = (
        <Menu size="huge" >
            
            <Menu.Item 
            name="XRSZ">
                {title}
            </Menu.Item>
        </Menu>
    )

    return (
        <>
            {isAuthenticated ? authLinks : guestLinks}
        </>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
}

NavBar.defaultProps = {
    title: 'XRSZ',
}
export default NavBar;