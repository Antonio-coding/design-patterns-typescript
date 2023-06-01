export default class Token {
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFUTiBlc3R1ZG9zIiwiaWF0IjoxNTE2MjM5MDIyfQ.Y1rAOaYWmWuc3irhPQ9gzvxgS5bibxibraFExGlOLlY";

    getToken(): string {
        return this.token;
    }
}