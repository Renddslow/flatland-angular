import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {
	@Input() title: string;
	@Input() name: string;

	profile: any;

	ngOnInit() {
  }

	visitor: Visitor = {
		firstName: null,
		lastName: null,
		email: null,
		phone: null,
		spouseCount: 0,
		date: null
	};

	invite: Invite = {
		friendName: null,
		friendEmail: null,
		name: null,
		email: null,
		message: null
	};

	dates = [
		{
			friendly: 'This Sunday',
			short: moment().add(1, 'weeks').isoWeekday(0).format('MMM D'),
			value: moment().add(1, 'weeks').isoWeekday(0).unix()
		},
		{
			friendly: 'Next Sunday',
			short: moment().add(2, 'weeks').isoWeekday(0).format('MMM D'),
			value: moment().add(2, 'weeks').isoWeekday(0).unix()
		},
		{
			friendly: 'Next Next Sunday',
			short: moment().add(3, 'weeks').isoWeekday(0).format('MMM D'),
			value: moment().add(3, 'weeks').isoWeekday(0).unix()
		}
	];

	addSpouse = () => {
		this.visitor.spouseCount = 1;
		this.visitor.spouse = { name: null };
	};

	addChild = () => {
		if (!this.visitor.children) {
			this.visitor.children = [
				{
						name: null,
						dob: null
				}
			];
		} else {
			this.visitor.children.push({
				name: null,
				dob: null
			});
		}
	}

	sendVisitor() {
		console.log(this.visitor)
	}

	sendInvite() {
		console.log(this.invite)
	}

}

class Visitor {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	spouseCount: number = 0;
	children?: [Child];
	spouse?: Spouse;
	date: string;
}

class Invite {
	friendName: string;
	friendEmail: string;
	name: string;
	email: string;
	message: string;
}

class Child {
	name: string;
	dob: string;
}

class Spouse {
	name: string;
}
