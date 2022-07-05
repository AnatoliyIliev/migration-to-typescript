export interface IArticles {
    status: string;
    totalResults: Readonly<number>;
    articles: IArticle[];
}

export interface IArticle {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;

    name: string;
    id: string;
}

export interface ISources {
    status: string;
    sources: ISource[];
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export enum ErrorStatusCode {
    Unauthorized = 401,
    NotFound = 404,
    Forbidden = 403,
    PaymentRequired = 402,
}

export type Options = { [key: string]: string };

export interface IParams {
    endpoint: string;
    options?: Options;
}

export type Callback<T> = (data?: T) => void;

export type ParamsPick = Pick<IParams, 'endpoint' | 'options'>;
