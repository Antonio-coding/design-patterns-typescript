import IAircraft from "../../aerial/interfaces/IAircraft";
import ILandeVehicle from "../../land/interfaces/ILandVehicle";

export default interface ITransportFactory {
 createTransportVehicle(): ILandeVehicle;
 createTransportAircraft(): IAircraft;  
}