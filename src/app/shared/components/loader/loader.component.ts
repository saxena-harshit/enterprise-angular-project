import { Component } from '@angular/core';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  loading$:any;

  constructor(private loadinService:LoaderService){}
  ngOnInit(){
    this.loading$=this.loadinService.loading$;
  }
}
