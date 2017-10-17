import { Component, Input } from '@angular/core';
import { markdown } from 'markdown';

@Component({
  selector: 'page-markdown',
  templateUrl: './page-markdown.component.html',
  styleUrls: ['./page-markdown.component.css']
})
export class PageMarkdownComponent {
	@Input() content: object;

	toMarkdown(content) {
		return markdown.toHTML(content);
	}
}
