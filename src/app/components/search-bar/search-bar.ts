import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})

export class SearchBar {

  @Input() search ='';
  @Output() searchChange = new EventEmitter<string>();

  searchButtonClicked = output ();
  searchClick(){
    this.searchButtonClicked.emit();
  }

  updateSearch(value:string){
    this.searchChange.emit(value);

  }
}
 