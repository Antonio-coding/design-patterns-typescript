import Vehicle from "../Products/Vehicle";
import Engine from "../components/Engine";
import Transmission from "../components/Transmisson";
import VehicleType from "../components/VehicleType";
import Wheel from './../components/Wheel';

export default interface IBuilder {
    reset(): void;
    getVehicle(): Vehicle;

    addWheel(wheel: Wheel);
    setVehicleType(value: VehicleType);
    setSeats(seats: number);
    setEngine(engine: Engine);
    setTransmission(transmission: Transmission);

}