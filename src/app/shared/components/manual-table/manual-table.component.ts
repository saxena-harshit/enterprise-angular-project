import { Component, Input, SimpleChange } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-manual-table',
  standalone: false,
  templateUrl: './manual-table.component.html',
  styleUrl: './manual-table.component.scss',
})
export class ManualTableComponent {
  keys: string[] = [];

  @Input() tableData: any[] = [];

  sortColumn:string='';
  sortDirection:'asc'|'desc'='asc';

  searchText:string='';

  get filteredUser(){
    if(!this.searchText) return this.tableData;
    return  this.tableData.filter(user=>
      user.username.toLowerCase().includes(this.searchText.toLowerCase())||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())||
      user.firstName.toLowerCase().includes(this.searchText.toLowerCase())||
      user.maidenName.toLowerCase().includes(this.searchText.toLowerCase())||
      user.lastName.toLowerCase().includes(this.searchText.toLowerCase())
      
      
    );
  }


  sort(column:string){
    if(this.sortColumn===column){
      this.sortDirection= this.sortDirection==='asc'?'desc':'asc';
    }else{
      this.sortColumn=column;
      this.sortDirection='asc'
    }
  }
  page = 1;
  pageSize=5;


  get Paginated() {
    const sorted=this.sorted;

    const start:number = (this.page - 1) * this.pageSize;
    return sorted.slice(start, start + this.pageSize);
  }

  get sorted(){
    const data = this.filteredUser;
    if(!this.sortColumn) return data;
    return [...data].sort((a,b)=>{
      const valueA=a[this.sortColumn]?.toString().toLowerCase();
      const valueB=b[this.sortColumn]?.toString().toLowerCase();
      if(valueA<valueB) return this.sortDirection==='asc'?-1:1;
      if(valueA>valueB) return this.sortDirection==='asc'?1:-1;
      return 0;
      
    })
  }
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

  objToString(obj: any) {
    let str = '';
    if (typeof obj === 'object') {
      for (let i in obj) {
        str = str + ' , ' + obj[i];
      }
    }

    return str;
  }
}
