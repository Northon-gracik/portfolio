//import { useContext } from "react";

import ActiveLink from "../ActiveLink";

//import Product  from "../../services/product";
//import { AuthContext } from "../authContext/index.jsx";


function Header() {
    //    const { signOut, user } = useContext(AuthContext);
    //    const product = Product(); 

    //    async function logout() {
    //        await signOut();
    //    }

    return (
        <header className="Header">
            <div className="Container"> 
                <ActiveLink style={{ width: '50%' }} href="/"  >
                <h1 className="Title">Portfolio - Northon Gracik</h1>

                </ActiveLink>
            </div>
            {/*
                <nav>
                    {!user ?
                        <>
                            <a href="/login">Login</a>
                        </>
                        :
                        <>
                            <a href="/dashboard">{user.name}</a>
                            <a onClick={logout}>Logout</a>
                        </>
                    }
                    <a href="/checkout">{product.length}</a>
                </nav>
             */}
        </header>
    )
}

export default Header;
