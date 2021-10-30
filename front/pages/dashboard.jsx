import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { getAPIClient } from "../src/services/axios";

import { AuthContext } from "../src/components/authContext";

import { getOrderByUser } from "../src/services/apiGet";

import Header from "../src/components/Header";
import OrdersDashboard from "../src/components/OrdersDashboard";
import ListOrder from "../src/components/ListOrder";



function dashboard(props) {
    const [orders, setOrders] = useState([]);

    get(getOrderByUser, {}, setOrders);

    const { user } = useContext(AuthContext);

    return (
        <div>
            <Header />
            <div>
                {!user ?
                    <div></div>
                    :
                    <>
                        <h3>{user.name}</h3>
                        <div>
                            <h4>Meus pedidos:</h4>
                            {!orders[0] ?
                                <h4>Parace que não tem pedidos, aproveite e peça agora</h4>
                                :
                                <OrdersDashboard orders={orders} />
                            }
                        </div>
                    </>
                }
            </div>
        </div >
    )
}


const get = (get, params, set) => useEffect(async () => set(await get(params)), []);

export async function getServerSideProps(ctx) {
    const apiClient = getAPIClient(ctx)
    const { 'portifolio-Token': token } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {
        }
    }

}

export default dashboard;

