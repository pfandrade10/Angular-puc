import { Injectable } from '@angular/core';
declare var iziToast:any;

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public show(title:string, menssage:string, type:AlertType){
    if(type == AlertType.success){
      iziToast.success({
        title: title,
        message: menssage,
      });
    }else if(type == AlertType.warning){
      iziToast.warning({
        title: title,
        message: menssage,
      });
    } else if(type == AlertType.error){
      iziToast.error({
        title: title,
        message: menssage,
      });
    } else{
      iziToast.show({
        title: title,
        message: menssage,
        theme:'dark'
      });
    }
  }
}

export enum AlertType{
  warning,
  error,
  success
}