import IPlaform from "./IPlatform";

export default class YouTube implements IPlaform {
  constructor() {
    this.configureRMTP();
    console.log("YouTube: Transmissão foi iniciada!");
  }
  configureRMTP(): void {
    this.authToken();
    console.log("YouTube: Configurando o broadcasting");
  }
  authToken(): void {
    console.log("YouTube: Autorizando a aplicação!");
  }
}
