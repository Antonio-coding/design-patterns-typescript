import chalk from "chalk";
import Middleware from "./Middleware";
import DataBase from "../servers/DataBase";

export default class CheckMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (email.indexOf("@") === -1) {
      console.log(chalk.red("E-mail  inválido!"));
      return false;
    }

    if (
      !DataBase.filter(
        (item) => item.email === email && item.password === password
      ).length
    ){
        console.log(chalk.red("E-mail ou senha inválidos!"));
        return false;
    }
      return this.checkNext(email,password);
  }
}
