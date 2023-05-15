import TypeVehicle from "./typeVehicle";
import Vehicle from "./vehicles/Vehicle";

const type = TypeVehicle.CAR;

let vehicle;

if (type === TypeVehicle.CAR) {
    vehicle = new Vehicle("Amarelo", 2022, 2.0, 4, 4);
    vehicle.car();
} else if (type === TypeVehicle.MOTORCYCLE) {
    vehicle = new Vehicle ("Vermelho",2024, 2.0, 1, 0 );
    vehicle.motorcycle();
}