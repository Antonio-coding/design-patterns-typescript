import Vehicle from "../Products/Vehicle";
import Engine from "../components/Engine";
import Transmission from "../components/Transmisson";
import VehicleType from "../components/VehicleType";
import Wheel from './../components/Wheel';

export default interface IBuilder {
    reset(): void;
    getVehicle(): Vehicle;

    addWheel(Wheel: Wheel);
    setVehicleType(value: VehicleType);
    setSeats(seats: number);
    setEngine(engine: Engine);
    setTransmission(trasnmission: Transmission);

}