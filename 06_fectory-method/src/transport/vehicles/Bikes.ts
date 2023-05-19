import IVehicle from './interfaces/IVehicle';

export default class Bike implements IVehicle{
startRoute(): void{
    this.getCargo();
    console.log("Iniciando a entrega de _bike_...")
}
getCargo(): void{
    console.log("Ja estamos prontos :)")
}
}