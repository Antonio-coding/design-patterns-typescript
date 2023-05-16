import IDbProduct from "./IDbProdutc";

export default class MongoDBProduct implements IDbProduct {
    getProductById(productID: number): string {
       return `MongoDB: Exibindo os dados do produto ${productID}`;
    }
    
}