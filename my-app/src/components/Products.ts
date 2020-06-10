
export interface Product{
    id: number
    name: string
    description: string
    img: string
    price: number
}

let Products: Product[] = [
   
    {   
        "id": 0,
        "name": "iPhone X",
        "description": "Last years phone from Apple with a beautiful all display front.",
        "img": "iPhoneX.png",
        "price": 11495,
        
    },{
        "id" : 1,
        "name": "One Plus 5",
        "description": "Sleek and powerful smartphone from One Plus.",
        "img": "OnePlus5.png",
        "price": 4995
    },{
        "id": 3,
        "name": "Galaxy S8",
        "description": "Really cool edge to edge smartphone from Samsung.",
        "img": "SamsungS8.png",
        "price": 7990
    },{
        "id": 4,
        "name": "LG V30",
        "description": "Super nice and beautiful smartphone from LG.",
        "img": "LGV30.png",
        "price": 7495
    },{
        "id": 5,
        "name": "Huawei Nova",
        "description": "Smooth and fast mobile phone from Huawei",
        "img": "HuaweiNova.png",
        "price": 5495
    },{
        "id": 6,
        "name": "Iphone 5",
        "description": "And older model from Apple, cheaper but perfect.",
        "img": "iphone5.png",
        "price": 3495
    },{
        "id": 7,
        "name": "Note 9",
        "description": "Practical with touch-pen model from Samsung",
        "img": "SamsungNote.png",
        "price": 11499
    },{
        "id": 8,
        "name": "LG Volt",
        "description": "Very modern and functional phone from LG.",
        "img": "LgVolt.png",
        "price": 6499
    },{
        "id": 9,
        "name": "Huawei Y6",
        "description": "Fast and with great design, best price from Huawei.",
        "img": "HuaweiY6.png",
        "price": 4495
    },{
        "id": 10,
        "name": "One Plus 7",
        "description": "Amazing phone with functionality and design",
        "img": "OnePlus7.jpg",
        "price": 6495
    }
];

export default Products;