import ILandeVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandeVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega...");
  }
  getCargo(): void {
    console.log("Ja pegamos a encomenda ...");
  }
}
