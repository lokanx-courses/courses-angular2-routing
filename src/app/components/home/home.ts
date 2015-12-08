import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'home'
})
@View({
  templateUrl: './app/components/home/home.html',
  directives: [CORE_DIRECTIVES]
})
export class Home {

}
