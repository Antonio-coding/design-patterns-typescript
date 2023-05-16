import NubankCard from "./NUBankCard";

export default class DebitCard extends NubankCard {

    validate(): void {
        console.log("Validae se há saldo suficinete...")
    }
}