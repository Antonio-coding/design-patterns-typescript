import ITransportFactory from "../factories/interfaces/ITransportFactory";
import ILandeVehicle from './../land/interfaces/ILandVehicle';
import IAircraft from './../aerial/interfaces/IAircraft';

export default class Client {
    
    private vehicle:ILandeVehicle;
    private aircraft:IAircraft;
    
    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }
    startRoute(): void {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}