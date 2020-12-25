import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestFunctionsService {
  imageRequestObject(type,object,imageTitle,image){
      const data = new FormData();
      data.append(type, JSON.stringify(object));
      if (typeof image === 'object' && image !== null) {
          data.append(type+'_image', image, imageTitle);
      }
      return data;
  }
}

