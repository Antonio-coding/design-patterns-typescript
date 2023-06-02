import IPlaform from "./IPlatform";

export default class Twitch implements IPlaform {
  constructor() {
    this.configureRMTP();
    console.log("Twitch: Transmissão foi iniciada!");
  }
  configureRMTP(): void {
    this.authToken();
    console.log("Twitch: Configurando o Broadcasting");
  }
  authToken(): void {
    console.log("Twitch: Autorizando a  aplicação!");
  }
}
