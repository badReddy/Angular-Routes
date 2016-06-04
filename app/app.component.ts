import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes , Router} from '@angular/router';
import { Home } from './home';
import { Topics } from './topics';

@Component({
	selector: 'my-app',
	templateUrl:'./app/views/app.template.html',
	directives: [ROUTER_DIRECTIVES]
})

@Routes([
	{ path : '/home', component: Home },
	{ path : '/topics', component: Topics },
	{ path : '*', component: Home }
])

export class AppComponent {
	constructor(private router: Router){
	}
}