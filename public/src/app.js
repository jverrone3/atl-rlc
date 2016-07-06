export class App {
  configureRouter(config, router) {
    config.title = 'ATL-RLC';
    config.map([
      // { route: ['','home'], name: 'home', moduleId: './home/home', nav: false, title:'Home' },
      { route: 'teams', name: 'teams', moduleId: './teams/teams', nav: true, title:'Teams' }
    ]);

    this.router = router;
  }
}