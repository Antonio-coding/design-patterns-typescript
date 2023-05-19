import Transport from "./Transport";
import Bike from "./vehicles/Bikes";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class BikeTransport extends Transport{
    protected createTransport(): IVehicle{
        return new Bike();
    }
}