import EmberRouter from '@ember/routing/router';
import config from 'challenge-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
<<<<<<< HEAD
  this.route('home');
  this.route('hot-button');
=======
  this.route('ember-challenges', function () {
    this.route('hot-button');
  });
>>>>>>> 2e0e82bde7ab070d148cd8305f0fe02f3987dfc0
});
