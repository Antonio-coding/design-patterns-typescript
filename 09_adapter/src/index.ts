import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/Paypal";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import MercadoPago from "./mercadopago/MercadoPago";

//const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());





payment.paypalPayment();
payment.paypalReceive();