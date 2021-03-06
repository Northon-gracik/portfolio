import { createContext, useState, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies"
import Router from "next/router"

import { api } from "../../services/api";
import { getUserByToken } from "../../services/apiGet";
import { authUser } from "../../services/apiPost";

const AuthContext = createContext({});

function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const isAuthenticated = !!user;

    function setAuthenticate(token, user){ 
        setCookie(undefined, "portifolio-Token", token, { 
            maxAge: 60 * 60 * 1, //1 hour
        });

        api.defaults.headers['authorization'] = `Bearer ${token}`

        setUser(user);

    }

    useEffect( async () => {
        try {
            const { 'portifolio-Token': token} = parseCookies();
            if(token) {
                const { user } = await getUserByToken();
                setUser(user)
            }
        }catch (err) {
            console.error(err)
        }
    }, [])

    async function signIn({email, password}){
        const { token, user } = await authUser(email, password);
        setAuthenticate(token, user);

        Router.push("/");
    }

    async function signOut(){        
        setCookie(null, "portifolio-Token", "", { 
            maxAge: 1, //instanted
        });

        api.defaults.headers['authorization'] = ` `;

        setUser(null);

        Router.push("/");
    }

    async function registerAccount({name, email, password}){ 
        try {
            const { token, userCreated } = await registerAccount( name, email, password );
        
            setAuthenticate(token, userCreated);

            Router.push("/")
        }
        catch (err) {
            console.error(err)
        }

    }
    
    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, registerAccount }}>
            {children}
        </AuthContext.Provider>
    )
} 

export { AuthContext, AuthProvider };
