import IPaymentIntrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentIntrument {
  validate(): void {
    console.log("Validação básica");
  }
  collectPayment(): void {
    console.log("Realizado pagamento");
  }
}
