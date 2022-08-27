import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'searchArtiste'
})
export class SearchArtistePipe implements PipeTransform {

  transform(pipeData:any, pipeModifier:any): any {
    // filter data
    return pipeData.filter((item:any) => {
      return(
        // pipeData: data to be queried   pipeModifier: data being searched
        item['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        item['gender'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    })
  }

}
