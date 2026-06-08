import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'enterpriseDashboard';
  @ViewChild(ChildComponent, {static:true}) child!:ChildComponent;
  @ViewChild('myinput') input!:ElementRef;
  ngAfterViewInit(){
    this.child.displayUser();

  }
  ngOnInit(){
        this.child.displayUser();

  }
  focusInput(){
    this.input.nativeElement.style.color="red";
  }




  searchText=''
  city=['agra','bareilly','delhi','dehradoon','noida']
  filteredCity=[...this.city];
  selctedCity:string[]=[];
  isdropDownOpen=false;

  filtredCityfn(){
    const search=this.searchText.toLowerCase();
    const result=this.city.sort((a,b)=>{
      const aMatch=a.toLowerCase().startsWith(search);
      const bMatch=b.toLowerCase().startsWith(search);
      if(aMatch && !bMatch){
        return -1;
      }
      if(bMatch && !aMatch){
        return 1;
      }
      return 0 ;
    });
   
    this.filteredCity=result.filter(city=>city.includes(search));
  }
  selectedCityfn(city:string){
    if(!this.selctedCity.includes(city)){
      this.selctedCity.push(city)

    }
    console.log(this.selctedCity);
    
    this.searchText='';
    this.filteredCity=[...this.city];
    this.isdropDownOpen=false;
  }
  removeCity(city:string){
    this.selctedCity= this.selctedCity.filter(item=>item!==city);
  }

}
