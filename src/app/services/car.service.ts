import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44331/api/'

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getall'
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl+ 'cars/getcardetails')
  }
  getCarDetailById(carId:number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl+ 'cars/getcardetailbyid?carId=' + carId)
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'cars/getbybrand?brandId=' + brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'cars/getbycolor?colorId=' + colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
