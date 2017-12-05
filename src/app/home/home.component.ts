import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	constructor(private router: Router, private titleService: Title) {}
	ngOnInit() {
    	this.titleService.setTitle('Home');
	}	
}

