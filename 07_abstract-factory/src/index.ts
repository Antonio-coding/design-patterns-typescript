import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";
import LaimeTransport from "./vehicles/factories/LaimeTranspor";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";

const currentCompany = Company.LAIME;
let factory: ITransportFactory;

switch (currentCompany) {
  case Company.UBER:
    factory = new UberTransport();
    break;
  case Company.NINENINE:
    factory = new NineNineTransport();
    break;
  case Company.LAIME:
    factory = new LaimeTransport();
    break;
  default:
    console.error("Desconhecida!");
}
const client = new Client(factory);
client.startRoute();
