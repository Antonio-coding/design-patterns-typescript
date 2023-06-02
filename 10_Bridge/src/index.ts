import { platform } from "os";
import IPlaform from "./platafomrs/IPlatform";
import Twitch from "./platafomrs/Twitch";
import YouTube from "./platafomrs/YouTube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";
import FacebookLive from "./platafomrs/FacebookLive";

function startLive(platform: IPlaform){
    console.log("Aguarde...")

    const live = new Live (platform);

    live.broadcasting();
    live.result();

}

function starAdvancedLive(platform: IPlaform){
    
    console.log("Aguarde... ");
    const live = new AdvancedLive(platform);

    live.broadcasting();
    live.result();
    live.comments();
    live.subtitle();

}



//startLive(new YouTube());
//startLive(new Twitch());

starAdvancedLive(new YouTube)
starAdvancedLive(new Twitch)
starAdvancedLive(new FacebookLive)