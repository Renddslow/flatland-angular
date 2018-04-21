import { Component, EventEmitter, Output } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() closeSearch = new EventEmitter<boolean>();

  searchTerm = '';
  searchResults = [];

  constructor(private http: Http) { }

  performSearch = () => {
    if (this.searchTerm.length > 2) {
      this.http.request(`https://api.flatlandchurch.com/v2/search?key=pk_e6afff4e5ad186e9ce389cc21c225&q=${this.searchTerm}`)
        .subscribe(res => {
          const response = res.json();
          if (!response['errors'] || !response['errors'].length) {
            this.searchResults = response['data'];
            this.searchResults = this.searchResults.map(this.setResultDisplayType);
          } else {
            this.searchResults = [];
          }
        });
    } else {
      this.searchResults = [];
    }
  };

  setResultDisplayType = result => {
    result['attributes']['displayType'] = this.getDisplayType(result['type']);
    return result;
  };

  getDisplayType = type => {
    switch (type) {
      case 'sermon_search':
        return 'Sermon';
      case 'blog_search':
        return 'Blog Post';
      case 'page_search':
        return 'Page';
      case 'event_search':
        return 'Event';
    }
  }

  closeSearchMenu() {
    this.closeSearch.emit(true);
  }

}
