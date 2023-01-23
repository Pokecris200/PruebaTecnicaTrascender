
export class Pokemon {
    endpoint = "https://pokeapi.co/api/v2/pokemon/1/";

    async obtain() {
        const response = await fetch(this.endpoint);
        const result = await response.json();
        return result;
    }
}