export class ProductModel {
    _id: string;
    image: string;
    title: string;
    price: number;
    oldPrice: number;
    rates: number;
    credit: number;
    description: string;
    advantages: string;
    disadvantages: string;
    categories: string[];
    tags: string;
    features: {
        [key: string]: string;
    };
}
