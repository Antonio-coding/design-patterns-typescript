import Drone from "../aerial/Drone";
import IAircraft from "../aerial/interfaces/IAircraft";
import Patinent from "../land/Patinet";
import ILandeVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class Laime implements ITransportFactory{
    createTransportVehicle(): ILandeVehicle {
        return new Patinent();
    }
    createTransportAircraft(): IAircraft {
        return new Drone;
    }
    
}