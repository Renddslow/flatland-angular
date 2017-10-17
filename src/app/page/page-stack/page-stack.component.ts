import { Component, Input } from '@angular/core';
import { markdown } from 'markdown';

@Component({
  selector: 'page-stack',
  templateUrl: './page-stack.component.html',
  styleUrls: ['./page-stack.component.css']
})
export class PageStackComponent {
	@Input() stack: [object];

	toMarkdown(content) {
		return markdown.toHTML(content);
	}
}
