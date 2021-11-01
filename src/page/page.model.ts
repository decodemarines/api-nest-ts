import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products,
}

export class Openings {
    @prop()
    count: number;

    @prop()
    juniorSalary: number;

    @prop()
    middleSalary: number;

    @prop()
    seniorSalary: number;
}

export class TopPageAdvantage {
    @prop()
    title: string;

    @prop()
    description: string;
}

export interface PageModel extends Base {}
export class PageModel extends TimeStamps {
    @prop({ enum: TopLevelCategory })
    topCategory: TopLevelCategory;

    @prop()
    secondCategory: string;

    @prop({ unique: true })
    alias: string;

    @prop()
    title: string;

    @prop()
    category: string;

    @prop({ type: () => Openings })
    openings?: Openings;

    @prop({ type: () => [TopPageAdvantage] })
    advantages: TopPageAdvantage[];

    @prop()
    seo: string;

    @prop()
    tagsTitle: string;

    @prop({ type: () => [String] })
    tags: string[];
}
