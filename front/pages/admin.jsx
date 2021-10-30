import { parseCookies } from "nookies";
import { getOrdersLength } from "../src/services/apiGet";
import { getAPIClient } from "../src/services/axios";

const admin = () => {
    getOrdersLength().then( data => console.log(data))
    return(
        <div>

        </div>
    )
}
export async function getServerSideProps(ctx) {
    const apiClient = getAPIClient(ctx)
    const { 'portifolio-Token': token } = parseCookies(ctx);

    apiClient.defaults.headers['authorization'] = `Bearer ${token}`;

    const { data } = await apiClient.get('a')
    
    if (!token && !data) {
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

export default admin;