import NavDropdownList from './NavDropdownList';
import { NavLink } from 'react-router-dom';

export default function NavMenuList({children}) {
        return (
            <>
                <li className={`nav-item ${children.subMenu ? "dropdown" : ''}`}>
                    { children.subMenu && (
                        <>
                            <a  className="nav-link dropdown-toggle"
                            role="button" 
                            data-bs-toggle="dropdown"
                            aria-expanded="false" 
                            aria-current="page">
                                {children.title}
                            </a>

                            <NavDropdownList menu_item={children}/>
                        </>
                    )}
                    { !children.subMenu && (
                        <NavLink to={children.path ? children.path : '#'}
                                className= {`nav-link ${children.subMenu ? "dropdown-toggle" : ''}`}
                                role="button" 
                                data-bs-toggle={children.subMenu ? "dropdown": ""}
                                aria-expanded="false" 
                                aria-current="page">
                            {children.title}
                        </NavLink>
                    )}
                </li>
            </> 
        );
}