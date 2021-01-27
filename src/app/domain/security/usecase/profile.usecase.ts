import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/app/core/base/use-case";
import { SecurityRepository } from "../repository/security.repository";


@Injectable({
    providedIn: 'root'
})
export class ProfileUseCase implements UseCase<any, any> {

    constructor(private securityRepository: SecurityRepository) {

    }

    public execute(): Observable<any> {
        const that = this;
        return this.securityRepository.getProfile();
    }
    
}