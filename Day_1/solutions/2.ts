{

    /*
    ----------------------
    problem - 2
    ----------------------
    Create a Product object that should be immutable after its initial creation. You need to be able to read the properties but should not allow modifications once created. Use TypeScript's Readonly utility type.
     */

    type ProductType = {
        name: string,
        readonly price: number
    }

    const product : ProductType = {
        name: "mobile",
        price: 100
    }

    // product.price = 200; this will show error

    console.log(product)
}