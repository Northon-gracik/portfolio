import { useContext } from "react";
import { AuthContext } from "../src/components/AuthContext";
import { useForm } from "react-hook-form";

function Cadastro(props) {
    const { register, handleSubmit } = useForm();
    const { registerAccount } = useContext(AuthContext)

    async function handleCreateAccount(data) {
        const { password, retryPassword } = data;

        if (password === retryPassword) {
            await registerAccount(data);
        }

    }

    return (
        <div >
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(handleCreateAccount)}>
                <label htmlFor="fname">
                    Name:
                    <br />
                    <input
                        {...register("name")}
                        type="name"
                        id="name"
                        name="name"
                        autoComplete="name"
                        placeholder="Name"
                    />
                </label>
                <br />
                <label htmlFor="fname">
                    Email:
                    <br />
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                    />
                </label>
                <br />
                <label htmlFor="lname">
                    Password:
                    <br />
                    <input
                        {...register("password")}
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        placeholder="Password"
                    />
                </label>
                <br />

                <label htmlFor="lname">
                    Retry Password:
                    <br />
                    <input
                        {...register("retryPassword")}
                        type="password"
                        id="retryPassword"
                        name="retryPassword"
                        autoComplete="current-password"
                        placeholder="Password"
                    />
                </label>
                <br />
                <button>Cadastro</button>
            </form>
        </div>
    )
}

export default Cadastro