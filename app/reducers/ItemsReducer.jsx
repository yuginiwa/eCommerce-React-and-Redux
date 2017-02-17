const path = require('path');

const imgPublicPath = path.join(__dirname, "./../../img");

export default function () {
    return [
        {
            id: 1,
            authorId: 1,
            category: "Mobile Phone",
            itemName: "Nokia x9",
            condition: "Brand new",
            price: "12345",
            location: "Luzon",
            itemImg: imgPublicPath+"/1.jpg",
            description: "Nokia Smartphone Brand New and Highly Negotiable. Comes with free headphone and speaker."
        },
        {
            id: 2,
            authorId: 3,
            category: "Computers",
            itemName: "HP 11000",
            condition: "Brand new",
            price: "1234556",
            location: "Luzon",
            itemImg: imgPublicPath+"/2.jpg",
            description: "Nokia Smartphone Brand New and Highly Negotiable. Comes with free headphone and speaker."
        },
        {
            id: 3,
            authorId: 5,
            category: "Appliances",
            itemName: "Samsung Curve TV",
            condition: "Pre-owned",
            price: "1234513134155",
            location: "Visayas",
            itemImg: imgPublicPath+"/3.jpg",
            description: "Nokia Smartphone Brand New and Highly Negotiable. Comes with free headphone and speaker."
        }
    ]
}
