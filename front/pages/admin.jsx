// import { parseCookies } from "nookies";
// import { getOrdersData } from "../src/services/apiGet";
// import { getAPIClient } from "../src/services/axios";
// import { useForm } from "react-hook-form";

// import Header from "../src/components/Header";
// import { createProduct } from "../src/services/apiPost";

const admin = () => {
    // const { register, handleSubmit } = useForm();
    // getOrdersData().then(data => console.log(data));

    // const handleCreateProduct = data => {
    //     data = {
    //         ...data, 
    //         quantity: parseInt(data.quantity),
    //         price: parseInt(data.price)
    //     }
    //     createProduct(data)
    // };

    return (
        <div>
            {/* <Header />
            <h3>Cadastrar Produto</h3>

            <form onSubmit={handleSubmit(handleCreateProduct)}>
                <label htmlFor="name">
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
                <label htmlFor="price">
                    Price:
                    <br />
                    <input
                        {...register("price")}
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                    />
                </label>
                <br />
                <label htmlFor="quantity">
                    Quantidade:
                    <br />
                    <input
                        {...register("quantity")}
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="Quantidade"
                    />
                </label>
                <br />
                <label htmlFor="stack">
                    Stack:
                    <br />
                    <select {...register("stack")}>
                        <option value="Front">Front</option>
                        <option value="Back">Back</option>
                        <option value="Full">Full</option>
                    </select>
                </label>
                <br />
                <label htmlFor="link">
                    Link:
                    <br />
                    <input
                        {...register("link")}
                        type="url"
                        id="link"
                        name="link"
                        placeholder="Link"
                    />
                </label>
                <br />
                <button>Criar</button>
            </form> */}
        </div>
    )
}
// export async function getServerSideProps(ctx) {
//     // const apiClient = getAPIClient(ctx)
//     // const { 'portifolio-Token': token } = parseCookies(ctx);

//     // apiClient.defaults.headers['authorization'] = `Bearer ${token}`;

//     // const { data } = await apiClient.get('a')

//     // if (!token && !data) {
//     //     return {
//     //         redirect: {
//     //             destination: '/login',
//     //             permanent: false
//     //         }
//     //     }
//     // }

//     return {
//         props: {
//         }
//     }

// }

export default admin;

