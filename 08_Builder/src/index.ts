import VehicleBuilder from './builders/VehicleBuilder';
import Director from './director/Director';
import Vehicle from './Products/Vehicle';

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();
const sedan: Vehicle = builder.getVehicle();

console.log(`Criando um veículo do tipo: ${sedan.vehicleType} com ${sedan.wheelsTotal} rodas. total de assentos do ${sedan.seats}.`)


director.constructTruck();

const truck: Vehicle = builder.getVehicle();

console.log(`Criando um veículo do tipo: ${truck.vehicleType} com ${truck.wheelsTotal} rodas. total de assentos: ${truck.seats}.`)