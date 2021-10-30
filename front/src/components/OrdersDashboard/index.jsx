
import ListOrder from "../ListOrder";

const ordersDashboard = props => {
    const { orders } = props;

    return (
        <div>
            {
                !orders
                    ?
                    <div></div>
                    :
                    <div>
                        {
                            orders.map(order => {
                                return (
                                    <ul key={order._id}>
                                        <div>
                                            <p>{order.statusPayment}</p>
                                            <p>{order.valueTotal}</p>
                                            <ListOrder id={order._id} />
                                        </div>
                                        <br />
                                    </ul>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
};

export default ordersDashboard;