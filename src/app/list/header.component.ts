import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styles: ['.brand-decoration{color:Blue,text-width:25px}']
})
export class HeaderComponent implements OnInit {

  @Output() searchKeyObject = new EventEmitter<String>();
  constructor() { }
  searchKey :string= "";
  
  onKey(event:any) { 
    this.searchKey = event.target.value;
    //alert (this.searchKey);
    this.searchKeyObject.emit(this.searchKey);
  }

  ngOnInit() {
  }

}
