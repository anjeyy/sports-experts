import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit{
  title: string = "Sports Experts - Make your predictions count";

  ngOnInit(): void {}
}
