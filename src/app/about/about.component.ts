import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
	constructor(private router: Router, private titleService: Title) {}
	ngOnInit() {
    	this.titleService.setTitle('About-us');
	}
}

