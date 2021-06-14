import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<boolean>();
  public navState: boolean

  constructor() { }

  ngOnInit(): void {
    this.navState = true
  }

  toggleSideNav(){
    console.log(this.navState)
    this.navState = !this.navState
    console.log(this.navState)
    this.toggle.emit(this.navState);
  }
}
