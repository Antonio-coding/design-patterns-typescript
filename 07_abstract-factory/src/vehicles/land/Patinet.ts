import ILandeVehicle from "./interfaces/ILandVehicle";

export default class Patinent implements ILandeVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega ...");
  }
  getCargo(): void {
    console.log("Ja pegamos a encomenda ...");
  }
}
