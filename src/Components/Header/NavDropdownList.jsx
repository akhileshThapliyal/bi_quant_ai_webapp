export default function NavDropdownList({menu_item}){
    return( 
        <ul className={`dropdown-menu ${menu_item.class ? menu_item.class : ''}`}>
            {
                menu_item.subMenu.map((subItem,index)=> (
                    <li key= {index} >
                        <a 
                        href="#"
                        className="dropdown-item" 
                        >{subItem}
                        </a>
                    </li>))
            }
        </ul>
    );
}