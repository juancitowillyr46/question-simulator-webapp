import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./../../../core/base/data.service";


@Injectable({
    providedIn: 'root'
})
export class PlansRepository {

    private resource = 'plans/';

    constructor(private dataService: DataService) {

    }

    saveAttempts(body: any): Observable<any> {
        const that = this;
        return that.dataService.post(that.resource + 'attempts', body);
    }


}