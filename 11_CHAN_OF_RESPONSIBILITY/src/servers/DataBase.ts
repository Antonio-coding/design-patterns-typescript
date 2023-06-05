import PermissionType from "./PermissionType";

interface DataBaseItem {
    email: string;
    password: string;
    permission: PermissionType;
};

 const DataBase: DataBaseItem[] = [
  {
    email: "atn@coding.com.br",
    password: "1131223",
    permission: PermissionType.ADMIN
 },
 {
     email: "user@coding.com.br",
     password: "u53rr959959",
     permission: PermissionType.ADMIN   

 }
 ];
 export default DataBase;
    