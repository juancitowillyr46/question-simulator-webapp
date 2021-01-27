import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/app/core/base/use-case";
import { SecurityRepository } from "../repository/security.repository";


@Injectable({
    providedIn: 'root'
})
export class ForgotPasswordUseCase implements UseCase<any, any> {

    constructor(private securityRepository: SecurityRepository) {

    }

    public execute(body: any): Observable<any> {
        const that = this;
        return this.securityRepository.forgotPassword(body);
    }
    
}