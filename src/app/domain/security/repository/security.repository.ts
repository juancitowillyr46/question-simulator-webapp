import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./../../../core/base/data.service";


@Injectable({
    providedIn: 'root'
})
export class SecurityRepository {

    private resource = 'security/';

    constructor(private dataService: DataService) {

    }

    signIn(body: any): Observable<any> {
        const that = this;
        return that.dataService.post(that.resource + 'login', body);
    }

    getProfile(): Observable<any> {
        const that = this;
        return that.dataService.get(that.resource + 'me-profile');
    }

    forgotPassword(body: any): Observable<any> {
        const that = this;
        return that.dataService.post(that.resource + 'forgot-password', body);
    }

    verifyToken(body: any) {
        const that = this;
        return that.dataService.post(that.resource + 'verify-token', body);
    }

    resetPassword(body: any) {
        const that = this;
        return that.dataService.post(that.resource + 'reset-password', body);
    }

    changePassword(body: any) {
        const that = this;
        return that.dataService.post(that.resource + 'change-password', body);
    }

}