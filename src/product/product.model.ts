import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

class ProductFeature {
    @prop()
    name: string;

    @prop()
    value: string;
}

export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
    @prop()
    image: string;

    @prop()
    title: string;

    @prop()
    price: number;

    @prop()
    oldPrice: number;

    @prop()
    rates: number;

    @prop()
    credit: number;

    @prop()
    description: string;

    @prop()
    advantages: string;

    @prop()
    disadvantages: string;

    @prop({ type: () => [String] })
    categories: string[];

    @prop({ type: () => [String] })
    tags: string[];

    @prop({ type: () => [ProductFeature], _id: false })
    features: ProductFeature;
}
