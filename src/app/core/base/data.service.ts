import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthHttpGatewayService } from './auth-http-gateway.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restApi = environment.REST_API;

  constructor(private authHttpGatewayService: AuthHttpGatewayService) { }

  private getUrl(path: string, id?: string | number) {
    const url = `${this.restApi}/${path}`;
    return id? `${url}/${id}` : url;
  }
  
  getCollection<T>(path: string): Observable<T[]> {
    const that = this;
    let url = that.getUrl(path);
    return this.authHttpGatewayService.get<T[]>(url);
  }

  get<T>(path: string, id?: string | number): Observable<T> {
    const that = this;
    let url = this.getUrl(path, id);
    return this.authHttpGatewayService.get<T>(url);
  }

  post<T>(path: string , data: any): Observable<any> {
    const that = this;
    let url = this.getUrl(path);
    return this.authHttpGatewayService.post(url, data);
  }

  put<T>(path: string, id: string | number, data: T): Observable<any> {
    const that = this;
    let url = this.getUrl(path, id);
    return this.authHttpGatewayService.put(url, data);
  }

  delete<T>(path: string, id: string | number): Observable<any> {
    const that = this;
    let url = this.getUrl(path, id);
    return this.authHttpGatewayService.delete(url);
  }

}
