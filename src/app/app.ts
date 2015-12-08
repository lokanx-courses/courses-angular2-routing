import {bootstrap, provide, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS, APP_BASE_HREF} from 'angular2/router';
import {Home} from './components/home/home';
import {About} from './components/about/about';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: Home, as: 'Home' },
  { path: '/About', component: About, as: 'About' },
  { path: '/Home', component: Home, as: 'Home' }
])

class AppComponent { }

bootstrap(AppComponent, [
    ROUTER_BINDINGS,
    provide(APP_BASE_HREF, {useValue: '/route'})
]);
