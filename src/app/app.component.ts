import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  getvalue!:FormGroup; 
  hidden:boolean =false;
  onedit:boolean=false;
  constructor(private fb: FormBuilder) {
    this.getvalue = this.fb.group({
      value:[""],
    });
    const Temp:any = localStorage.getItem('data');
    if(Temp!=null){
      this.x=JSON.parse(Temp);
    }
    this.getvalue.patchValue({
      value:this.getvalue.value.value
    })
   }
   get f() {return this.getvalue.controls;}

   x:any=[];
   onSubmit(){
    this.onedit= false;
    if(this.onedit==false){
      this.x.push(this.getvalue.value);
      localStorage.setItem('data',JSON.stringify(this.x));
    }

   } 
   delete(data:any,index:any){
    this.x.splice(index,1);
    localStorage.setItem('data',JSON.stringify(this.x)); 
   }
   editID:number | undefined;
   edit(val:any, valID:any){
    this.hidden= true; 
    this.editID = valID;
   }
  index!:number;
  
   save(data:any,item:any){
 
    this.index=item;
    this.onedit=true;
    let y = data;

    this.hidden =true;

    if(this.onedit==true){
      this.x.splice(this.index,1,this.getvalue.value);
      console.log(this.x)
      localStorage.setItem('data',JSON.stringify(this.x)); 
    }
   }
}



