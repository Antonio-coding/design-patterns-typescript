import NubankCard from "./NUBankCard";

export default class CreditCard extends NubankCard{
    validate(): void {
        console.log("Verificando o limite...")
    }
}