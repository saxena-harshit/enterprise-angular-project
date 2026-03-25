import { Component, Input, SimpleChange } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-virtual-scroll-table',
  standalone: false,
  templateUrl: './virtual-scroll-table.component.html',
  styleUrl: './virtual-scroll-table.component.scss'
})
export class VirtualScrollTableComponent {
 keys: string[] = [];

  @Input() tableData: any[] = [];


  ngOnChanges(changes: SimpleChange) {
    console.log(this.tableData);

    if (this.tableData && this.tableData.length) {
      this.keys = Object.keys(this.tableData[0]);

      console.log(this.tableData);
    }
  }

  trackByUserID(index: number, user: User) {
    return user.id;
  }
 
 
  objToString(obj:any){
    let str ='';
   console.log(obj.name)
   if( typeof obj ==="object"){
    for( let i in obj){
    str = str+ " , "+obj[i]

    }
   }

       return str;

   debugger
  }
}
