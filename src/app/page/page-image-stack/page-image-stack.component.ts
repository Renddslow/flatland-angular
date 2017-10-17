import { Component, Input } from '@angular/core';
import { markdown } from 'markdown';

@Component({
  selector: 'page-image-stack',
  templateUrl: './page-image-stack.component.html',
  styleUrls: ['./page-image-stack.component.css']
})
export class PageImageStackComponent {
	@Input() stack: [object];

	toMarkdown(content) {
		return markdown.toHTML(content);
	}

}
