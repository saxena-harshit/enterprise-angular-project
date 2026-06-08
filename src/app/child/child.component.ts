import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
user={name:"harshit saxena"};
displayUser(){
  console.log(this.user)
}

isDropdownOpen = false;

cities = [
  'Delhi',
  'Mumbai',
  'Noida',
  'Dehradun',
  'Lucknow',
  'Indore',
  'Chennai'
];


filteredCity=[...this.cities];

selctedCity:string[]=[]

searchText='';

 
filterOptions(){
  const search=this.searchText.toLowerCase();
  this.filteredCity= this.cities.sort((a,b)=>{

    const aMatch=a.toLowerCase().startsWith(search);

    const bMatch=b.toLowerCase().startsWith(search);

    if(aMatch && !bMatch){
      return -1;

    }
    if(!aMatch && bMatch){
      return 1;


    }
    return 0 ;

    
  }).filter(city=>
    city.toLowerCase().includes(search)
  )
}

// selectCity(city:string){
//   const exists=this.selctedCity.includes(city);

//   if (!exists) {
//     this.selctedCity.push(city);
//   }

//   console.log(this.selctedCity);
//     this.isDropdownOpen = false;
// }
selectCity(city: string): void {

  if (!this.selctedCity.includes(city)) {
    this.selctedCity.push(city);
  }
console.log(this.selctedCity);
  this.searchText = '';
  this.filteredCity = [...this.cities];
  this.isDropdownOpen = false;
}
removeCity(city: string): void {

  this.selctedCity =
    this.selctedCity.filter(
      item => item !== city
    );
console.log(this.selctedCity)
}
}
