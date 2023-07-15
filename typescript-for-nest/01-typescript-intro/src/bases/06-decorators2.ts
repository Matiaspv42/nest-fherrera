const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}

export class User {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream(){
        console.log(`AAAHHH!`)
    }
    @Deprecated('ta bien malo usa otro')
    speak(){
        console.log(`Hi, I'm ${this.name}`)
    }
}

export const user = new User(1, 'James');
user.speak();