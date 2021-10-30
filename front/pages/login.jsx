import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../src/components/authContext";
import { Header } from "../src/components/Header";

import api from "../src/services/api";


function Login ({data}) {

    const { register, handleSubmit } = useForm();

    const { signIn, user, signOut } = useContext(AuthContext)

    async function handleSignIn (data) {
        await signIn(data)
    }

    
    return(
        
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(handleSignIn)}> 
                <label htmlFor="fname">
                    Email:
                    <input
                        {...register("email")} 
                        type="email" 
                        id="email" 
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                    />
                </label>
                <br/>
                <label htmlFor="lname">
                    Password:
                    <input 
                        {...register("password")} 
                        type="password" 
                        id="password" 
                        name="password"
                        autoComplete="current-password"
                        placeholder="Password"
                    />
                </label>
                <br/>
                <button>Login</button>
            </form>
            <p>Não tem conta, <a href="/cadastro">Faça uma agora</a></p>
                
        </div>
    )
    
}

// export async function getServerSideProps() {
//     const res = await fetch(``)
//     const data = await res.json()
  
//     return { props: { data } }
// }

export default Login;