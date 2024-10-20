import { MenuList } from "../../Data/MenuList";
import NavMenuList from "./NavMenuList";

// /logo/logo.svg

export default function Header(){
    return(
        <>
         {/* Navbar */}
         <nav className="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
                    <div className="container">

                     {/* Logo */}

                     <a className="navbar-brand" href="./index.html">
                        <img src='assets/images/logo.svg' alt="" width="165" />
                    </a>

                    {/* Navbar toggler button  */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-toggler-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    {/* Navbar content*/}

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
                                
                                <ul className="navbar-nav gap-lg-2 gap-xl-5">
                                {
                                    MenuList.map((item, index) => (
                                        <NavMenuList className={`nav-item ${item.subMenu ? "dropdown" : ''}`} key={index}>
                                            {item}
                                        </NavMenuList>))
                                }
                                </ul> 
                            <div className="">
                            <a href="login.html" className="btn btn-outline-primary-dark">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> 
        </>                        
    );
}