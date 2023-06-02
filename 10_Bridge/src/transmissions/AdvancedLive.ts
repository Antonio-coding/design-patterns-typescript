import IPlaform from "../platafomrs/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{

    constructor (platform: IPlaform){

        super(platform);
    }
    subtitle(): void {
        console.log("legendas ativadas na transmissão!")
    }

    comments(): void {
        console.log("Comentários ativados na transmissão!")
    }
}