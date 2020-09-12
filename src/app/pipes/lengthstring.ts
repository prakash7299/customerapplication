import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ "name" : "lengthstring" })
export class LengthStringPipe implements PipeTransform{
   
    transform(original: string,args):number {   
   console.log("inside substring transform, original="+original);
   let desired=original.length;
   return desired;
 }

}
