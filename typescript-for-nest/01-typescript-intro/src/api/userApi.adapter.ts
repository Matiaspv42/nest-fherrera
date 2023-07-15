import axios from 'axios'

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}


export class userApiFetchAdapter implements HttpAdapter{

    async get<T>(url: string){
        const resp = await fetch(url);
        const data: T = await resp.json();
        return data;
    }
}

export class userApiAdapter implements HttpAdapter{
    private readonly axios = axios
    // agregando el generico T podemos pasar tipado al metodo get
    async get<T>(url: string){
        const {data} = await this.axios.get<T>(url);
        return data;
    }

    async post( url: string){

    }
    async patch( url: string){
        
    }
    async delete( url: string){
        
    }
}