import ILandeVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandeVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciado o Trajeto...");
  }
  getCargo(): void {
    console.log("Pegamos os passageiros");
  }
}
