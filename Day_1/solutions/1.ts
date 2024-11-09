{
  /*
     1. Complex Object Structure with Type Inference
You have a function processUserData that takes an object with name, age, address, and contact. The contact property is optional and can be an object or null. Ensure that you handle null correctly in this object when processing data.

    */

    // solution
    type UserData = {
        name: string,
        age: number,
        address: string,
        contact?: string | null
    }

    const processUserData = (obj : UserData) : boolean => {
        if(obj.contact) return true;
        return false;
    }

    const user = {
        name: 'nahid',
        age: 24,
        address: 'dhaka'
    }


    const result = processUserData(user)
    console.log(result)
}
