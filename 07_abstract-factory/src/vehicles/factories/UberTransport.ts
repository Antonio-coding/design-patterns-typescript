import Airplane from "../aerial/Airplane";
import IAircraft from "../aerial/interfaces/IAircraft";
import Car from "../land/Car";
import ILandeVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export  default class UberTransport implements ITransportFactory{
    createTransportVehicle(): ILandeVehicle {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
       return new Airplane();
    }

}