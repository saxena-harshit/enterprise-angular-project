import {AfterViewInit, Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-dynamic-table',
  standalone: false,
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent implements AfterViewInit {
  @Input() tableData:any[]=[];
 displayedColumns: any[] = [];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

   ngOnChanges(changes: SimpleChanges) {
    debugger
    if (changes['tableData'] && this.tableData?.length) {
debugger
      console.log("tableData:", this.tableData);

      this.displayedColumns = Object.keys(this.tableData[0]);
      this.dataSource = new MatTableDataSource(this.tableData);

      // Attach paginator & sort if already available
      if (this.paginator) this.dataSource.paginator = this.paginator;
      if (this.sort) this.dataSource.sort = this.sort;

      console.log("columns:", this.displayedColumns);
    }
  }
  
  isObject(value:any){
    return typeof value==='object'

  }

  convertToString(value:any){
    let res='';
    for( let i in value){
        if(res.length!=0){
                  res= res+" , "+value[i]
  
        }else{
                    res= res+value[i]

        }

    }
    return res;
  

}

  ngAfterViewInit() {
     if (!this.dataSource) return; 
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



