import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('aliasElementName') element: {
    type: string;
    name: string;
    content: string;
  };
  constructor() {}

  ngOnInit(): void {}
}
// aliaselementname serves as a name u can use outside this comp to call element object
