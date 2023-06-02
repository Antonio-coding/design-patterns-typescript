import IPlatform from "../platafomrs/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission {
  constructor(private platform: IPlatform) {}

  broadcasting(): void {
    console.log("Inicando a Transmissão!");
  }
  result(): void {
    console.log("********** ON AIR ************");
  }
}
