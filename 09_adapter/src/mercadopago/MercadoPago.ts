import Token from "../utils/Token";
import IMercadoPago from "./IMercadoPago";

export default class MercadoPago implements IMercadoPago {
  private token: Token;

  authToken(): Token {
    return new Token();
  }
  sendPayment(): void {
    this.token = this.authToken();
    console.log("TOKEN: " + this.token.getToken());
    console.log("Enviando pagamentos via MercadoPago.");
  }
  receivePayment(): void {
    console.log ("Recebendo Pagamentos via MercadoPago.");
  }
}
