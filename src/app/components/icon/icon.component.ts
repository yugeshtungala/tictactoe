import { Component, OnInit, Input } from '@angular/core';
import { faTimes, faPen} from '@fortawesome/free-solid-svg-icons'
import { faCircle} from '@fortawesome/free-regular-svg-icons'


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
@Input() iconName :string;
  constructor() { }
  faPen = faPen
  faTimes=faTimes
  faCircle= faCircle

  ngOnInit(): void {
  }

}
