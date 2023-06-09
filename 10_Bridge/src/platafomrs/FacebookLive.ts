import IPlaform from "./IPlatform";

export default class FacebookLive implements IPlaform {
  constructor() {
    this.configureRMTP();
    console.log("FacebookLive: Transmissão foi iniciada!");
  }
  configureRMTP(): void {
    this.authToken();
    console.log("FacebookLive: Configurando o broadcasting");
  }
  authToken(): void {
    console.log("FacebookLive: Autorizando a aplicação!");
  }
}
