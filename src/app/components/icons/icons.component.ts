import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() status: string;
  icon: IconDefinition = faCoffee;

  iconTypes = {
    todo: faSpinner,
  }

  ngOnInit(): void {
    this.icon = this.iconTypes[this.status]
  }

}
