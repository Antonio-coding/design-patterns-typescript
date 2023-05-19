import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem...")
    }
    getCargo(): void {
       console.log("Passagens OK. Ligando hélices...");
    }
    checkWind(): void {
      console.log("Ventos a 25KM, Sudeste, ventos ok!");
    }
}