import {Component, OnInit} from '@angular/core';
import {News} from '../../../models/news';
import {Article} from '../../../models/article';
import {NewsapiService} from '../../service/newsapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  source:string;
  latest_news: News = new News("OK",this.source,"top");
  errorMessage = '';
  feedType: string;

  constructor(private _service:NewsapiService, private route: ActivatedRoute) {}

  /*
  private seedNewsData():News {
    let news:News = new News();
    news.status = "ok";
    news.source = "nfl";
    news.sortBy = "top";
    news.articles = this.seedArticles();

    return news;
  }

  private seedArticles(): Article[] {
    let articles: Article[] = new Array();
    articles.push({
      author:"Lakisha Jackson",
      title:"Mike Williams denies report on season-ending surgery",
      description:"Los Angeles Chargers first-round pick Mike Williams is denying reports that he might need season-ending back surgery.",
      url:"http://www.nfl.com/news/story/0ap3000000821316/article/mike-williams-denies-report-on-seasonending-surgery",
      urlToImage:"http://static.nfl.com/static/content/public/photo/2017/07/22/0ap3000000821315_thumbnail_200_150.jpg",
      publishedAt:"2017-07-22"
    });

    articles.push({
      author:"Jeremy Bergman",
      title:"Tamba Hali, upset with snaps, launches tweetstorm",
      description:"We've got ourselves a Saturday afternoon tweetstorm in late July, courtesy of Chiefs pass rusher Tamba Hali.",
      url:"http://www.nfl.com/news/story/0ap3000000821309/article/tamba-hali-upset-with-snaps-launches-tweetstorm",
      urlToImage:"http://static.nfl.com/static/content/public/photo/2017/07/22/0ap3000000821310_thumbnail_200_150.jpg",
      publishedAt:"2017-07-22"
    });

    return articles;
  }
  */

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.feedType = (data as any).feedType;
      this.source = (data as any).source;
    });

    this._service.fetchNewsFeed(this.feedType)
      .subscribe(
        items => this.latest_news = items,
        error => {this.errorMessage = 'Could not load ' + this.feedType + ' stories.'; console.log(this.errorMessage)}
      );
  }

}
