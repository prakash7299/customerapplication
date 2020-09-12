import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ "name" : "reversestring" })
export class ReverseStringPipe implements PipeTransform{
   
    transform(original: string, ...args:number[] ):string {   
   console.log("original="+original);     
    let desired=original.length;
    let temp=desired;
    reversed="";
    for(let i=0;i<desired;i++){
        var reversed=reversed+original[temp-1];
        temp=temp-1;
    }
     return reversed;
    }


}
