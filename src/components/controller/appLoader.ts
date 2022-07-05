import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd77b2c93f9e7411291907430cc6d1043', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
