{
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