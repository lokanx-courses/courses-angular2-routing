import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'about'
})
@View({
  templateUrl: './app/components/about/about.html',
  directives: [CORE_DIRECTIVES]
})
export class About {

}
