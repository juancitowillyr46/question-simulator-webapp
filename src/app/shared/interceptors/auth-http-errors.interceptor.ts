import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginComponent } from 'src/app/presentation/login/login.component';
import Swal from 'sweetalert2';

@Injectable()
export class AuthHttpErrorsInterceptor implements HttpInterceptor {

    public constructor(public modalService: NgbModal) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const that = this;
        return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
            if(error.status === 401) {

                if(localStorage.getItem('accessToken') || localStorage.getItem('accessToken') != undefined) {

                    let ref = null;
                    ref = this.modalService.open(LoginComponent, 
                        {
                          ariaLabelledBy: 'modal-basic-title', 
                          backdrop: 'static', 
                          size: 'sm',
                          centered: true
                        }
                    );
                    
                    ref.componentInstance.dataModal = {
                        isExpiredToken: true
                    };

                } else {
                    
                    Swal.fire({
                        title: 'Error',
                        text: error['error']['error']['message'],
                        timerProgressBar: true,
                        icon: 'error',
                        confirmButtonText: 'Cool',
                        timer: 2000
                    });
                }

            } else if(error.status === 403) {

                Swal.fire({
                    title: 'Error!',
                    text: '403 Forbiden',
                    timerProgressBar: true,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                    timer: 2000
                });

            } else if(error.status === 404) {

                // TODO: Implementar alertas
                Swal.fire({
                    title: 'Error',
                    text: error['error']['error']['message'],
                    timerProgressBar: true,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                    timer: 2000
                });

            } else if(error.status === 500) {

                Swal.fire({
                    title: 'Error!',
                    text: '500 Error',
                    timerProgressBar: true,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                    timer: 2000
                });

            }
            return  throwError(error);
        }));
    }

}