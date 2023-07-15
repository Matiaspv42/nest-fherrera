import { HttpAdapter, userApiAdapter, userApiFetchAdapter } from "../api/userApi.adapter";

export class User {

    constructor(    
        public readonly id: number,
        public name: String,
        private readonly http: HttpAdapter,
        ){}

    get imageUrl(): String {
        return `www.imgur.com/${this.name}`
    }

    nameUpperCase() {
        return this.name.toUpperCase;
    }

    async getApi() {
        const data = await this.http.get('url');
        console.log('async hi')
    }
}

const userApi = new userApiAdapter(); 
const userApiFetch = new userApiFetchAdapter(); 


export const user = new User(5, 'user', userApiFetch)

console.log(await user.getApi())