import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class ExamClearTimerObservable {

 private message = new BehaviorSubject(null);
 public currentMessage = this.message.asObservable();

 changeMessage(value) {
  this.message.next(value);
 }

}
