class NewUser {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream(){
        console.log(`nuevo usuario`)
    }
    speak(){
        console.log(`Hi, I'm ${this.name}2`)
    }
}


const MyFirstDecorator = () => {
    return (target: Function) => {
        return NewUser
    }
}

@MyFirstDecorator()
export class User {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream(){
        console.log(`AAAHHH!`)
    }
    speak(){
        console.log(`Hi, I'm ${this.name}`)
    }
}

export const user = new User(1, 'James');
user.speak();
user.scream();