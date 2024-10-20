import NavDropdownList from './NavDropdownList';

export default function NavMenuList({children, className}) {
        return (
            <>
                <li className={className}>
                    <a className= {`nav-link ${className.includes("dropdown") ? "dropdown-toggle" : ''}`}
                        href="#" 
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false" 
                        aria-current="page" 
                        >
                        {children.title}
                    </a>
                    {className.includes("dropdown") &&
                        <NavDropdownList menu_item={children}/>
                    }
                </li>
            </> 
        );
}