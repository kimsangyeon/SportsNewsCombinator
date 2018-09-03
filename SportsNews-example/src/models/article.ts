import IArticle from './IArticle';

export class Article implements IArticle{
  author:string;
  title:string;
  description:string;
  url:string;
  urlToImage:string;
  publishedAt:string;
}
