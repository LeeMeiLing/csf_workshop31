export const INVENTORY: Item[] = [

    {image:'/assets/images/iphone.jpg',description:'Iphone', quantity:0},
    {image:'/assets/images/fold.jpg',description:'Samsung Z Fold', quantity:0},
    {image:'/assets/images/flip.jpg',description:'Samsung Z flip', quantity:0},
    {image:'/assets/images/s21.jpg',description:'Samsung S21', quantity:0},

]
    
export interface Item{

    image:string;
    description:string;
    quantity:number
    
}

// export interface CartItem{

//     image:string;
//     description:string;
//     quantity:number
// }