import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {
  private token: Token;

  constructor(private mercadoPago: MercadoPago) {
    console.log(
      "Adaptando dp MercadoPago utilizando os metodos e padrões do Paypal."
    );
  }

  authToken(): Token {
    return this.mercadoPago.authToken();
  }
  paypalPayment(): void {
    return this.mercadoPago.sendPayment();
  }
  paypalReceive(): void {
    return this.mercadoPago.receivePayment();
  }
}
