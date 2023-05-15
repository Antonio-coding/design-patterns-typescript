import Client from "./Clients";
import Notify from "./Notify";

const cliente = new Client(); 
const notificacao = new Notify(cliente);

notificacao.sendEmail();