import Payonner from "../payonner/Payonner";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayment {
 
    private token: Token;

  constructor(private payonner: Payonner) {
    console.log(
      "Adaptando o payonner utilizando os metodos e padrões do Paypal."
    );
  }

  authToken(): Token {
    return this.payonner.authToken();
  }
  paypalPayment(): void {
    return this.payonner.sendPayment();
  }
  paypalReceive(): void {
    return this.payonner.receivePayment();
  }
}
