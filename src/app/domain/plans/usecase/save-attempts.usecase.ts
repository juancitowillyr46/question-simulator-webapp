import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/app/core/base/use-case";
import { PlansRepository } from "../repository/plans.repository";


@Injectable({
    providedIn: 'root'
})
export class SaveAttemptsUseCase implements UseCase<any, any> {

    constructor(private plansRepository: PlansRepository) {

    }

    public execute(body: any): Observable<any> {
        const that = this;
        return this.plansRepository.saveAttempts(body);
    }
    
}