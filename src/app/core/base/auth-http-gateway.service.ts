import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable()
export class AuthHttpGatewayService {

  constructor(private http: HttpClient) { 

  }

  public get<T>(path: string): Observable<T> {
    const subject = new Subject<any>();
    this.http.get<T>(path)
    .subscribe(
      data => subject.next(data),
      error => {
        // TODO: Implementar alerta
        // alert(JSON.stringify(error));
        subject.error(error);
      }
    );
    return subject.asObservable();
  }

  public post(path: string, parsedBody: any): Observable<Response> {
    const subject = new Subject<any>();
    this.http.post(path, parsedBody) // , {withCredentials: true}
        .subscribe(
          data => subject.next(data),
          error => {
            // TODO: Implementar alerta
            if(error && error.status == 401){
              console.log(error);
              Swal.fire({
                title: 'Error',
                text: error['error']['error']['message'],
                timerProgressBar: true,
                icon: 'error',
                timer: 5000
              });
            }
            subject.error(error);
          }
        );
    return subject.asObservable();    
  }

  public put(path: string, parsedBody: any): Observable<Response> {
    const subject = new Subject<any>();
    this.http.put(path, parsedBody)
        .subscribe(
          data => subject.next(data),
          error => {
            // TODO: Implementar alerta
            subject.error(error);
          }
        );
    return subject.asObservable(); 
  }

  public delete(path: string): Observable<Response> {
    const subject = new Subject<any>();
    this.http.delete(path, { withCredentials:true })
        .subscribe(
          data => subject.next(data),
          error => {
            // TODO: Implementar alerta
            subject.error(error);
          }
        );
    return subject.asObservable(); 
  }

}
