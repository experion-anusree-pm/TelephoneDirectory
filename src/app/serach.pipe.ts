import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serach'
})
export class SerachPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let resultArray = [];

    if(value.length === 0)
      return value;
      console.log(args);
    if(args===''){
        console.log("from if"+args);
        return value;
        
      }
    else{
      for(let item of value){
        if( (item.firstName.match('^'+args+'.*$')) 
            ||(item.phoneNumber.match('^'+args+'.*$') )
            ||(item.firstName.match('^'+args+'.*$'))
            ){
          resultArray.push(item); 
        }
      }
    return resultArray;
    }

  }

}
