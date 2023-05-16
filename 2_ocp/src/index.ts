import TypeVehicle from "./typeVehicle";
import Motorcycle from "./vehicles/Motorcycle";
import Car from "./vehicles/Car";

const type = TypeVehicle.CAR;
let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("Amarelo", 2022, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("Vermelho", 2024, 2.0);
}
