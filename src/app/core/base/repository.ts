import { Observable } from 'rxjs';

export abstract class Repository<T> {
    abstract create(entity: T): Observable<T>;
    abstract read(id: string | number): Observable<T>;
    abstract update(entity: T): Observable<T>;
    abstract delete(entity: T): Observable<T>;
    abstract all(entity: T): Observable<T[]>;
    abstract allCollection(params: any): Observable<T[]>;
}