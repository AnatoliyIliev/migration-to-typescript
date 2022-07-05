import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IArticles, ISources } from '../types/index';

class App {
    public controller;
    public view;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event): void =>
            this.controller.getNews(e, (data) => this.view.drawNews(data as IArticles))
        );
        this.controller.getSources((data) => this.view.drawSources(data as ISources));
    }
}

export default App;
