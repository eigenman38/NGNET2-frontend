import { Observable } from 'rxjs';
import { ApiBaseCallService } from './api-base-call.service';

export abstract class PostApiBaseCallService extends ApiBaseCallService {

    protected abstract execute<T>(parameters: T): Observable<T>;
    protected abstract execute<T, D>(parameters: D): Observable<T>;

}