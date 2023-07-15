export class User {

    constructor(    public readonly id: number,
        public name: String){
        
    }

    get imageUrl(): String {
        return `www.imgur.com/${this.name}`
    }

    nameUpperCase() {
        return this.name.toUpperCase;
    }

    async getApi() {
        console.log('async hi')
    }
}

export const user = new User(5, 'user')

console.log(await user.getApi())