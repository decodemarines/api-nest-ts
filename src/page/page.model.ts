export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products,
}
export class PageModel {
    _id: string;
    topCategory: TopLevelCategory;
    secondCategory: string;
    title: string;
    category: string;
    openings?: {
        count: number;
        junSalary: number;
        midSalary: number;
        senSalary: number;
    };
    advantages: {
        title: string;
        description: string;
    }[];
    seo: string;
    tagsTitle: string;
    tags: string[];
}
