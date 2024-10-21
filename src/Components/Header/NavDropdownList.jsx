import { NavLink } from 'react-router-dom';

export default function NavDropdownList({menu_item}){
    return( 
        <ul className={`dropdown-menu ${menu_item.class ? menu_item.class : ''}`}>
            {
                menu_item.subMenu.map((subItem, index)=> (
                    <li key= {index} >
                        <NavLink to={subItem.path ? subItem.path : '#'}
                            className="dropdown-item" 
                        >
                            {subItem.title}
                        </NavLink>
                    </li>))
            }
        </ul>
    );
}