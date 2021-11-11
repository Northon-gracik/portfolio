
// import { useForm } from "react-hook-form";

// import Router from "next/router";

// import { bindActionCreators } from "redux";
// import { connect } from "react-redux"
// import * as OrderAction from "../src/store/actions/order";
// import { closeOrder } from "../src/services/apiPost";

function FormClose(
    // {order, cleanOrder}
    ) {
    // const { register, handleSubmit } = useForm();

    // const formValues = data => {
    //     const payment = {
    //         type: data.paymentType,
    //     }
    //     closeOrder(order, payment)
    //     cleanOrder();
    //     Router.push("/dashboard")
    // }
    return (
        <div>
            {/* <form onSubmit={handleSubmit(formValues)}>
                <label htmlFor="paymentType">Escolha o tipo de pagamento:</label>
                <br />
                <input
                    {...register("paymentType")}
                    type="radio"
                    name="paymentType"
                    id="paymentType"
                    value="TICKET" />
                <label htmlFor="boleto">Boleto</label>
                <br />
                <button>Finalizar</button>
            </form> */}
        </div>
    )
}

// const mapStateToProps = state => ({
//     order: state.order.orderId,
// });

// const mapDispatchToProps = dispatch => bindActionCreators(OrderAction, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(FormClose);

export default FormClose