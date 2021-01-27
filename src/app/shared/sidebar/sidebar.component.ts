import { Component, OnInit } from '@angular/core';
import { ExamProgressBarObservable } from '../../core/observables/exam-progress-bar.observable';
import { Chart } from 'chart.js';
import { IsEndExamObservable } from '../../core/observables/is-end-exam.observable';
import { InitFunctionJsService } from '../services/init-function-js.service';
import { Router } from '@angular/router';
// import { truncate } from 'fs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // public userData = null;

  // isProgressBar = true;

  // totalQuestions = 0;
  // totalAnswersChecked = 0;
  // totalNoAnswersChecked = 0;
  // totalPorcertange = 0;
  // numOption = 0;

  // isEndExam: any = false;

  // private examProgressBarObservable: ExamProgressBarObservable,
  // private isEndExamObservable: IsEndExamObservable
  
  constructor(private initFunctionJsService: InitFunctionJsService, private router: Router) { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const that = this;
    that.initFunctionJsService.executeSideBar();
  }

  navMenu(url: any) {
    this.router.navigate([url]);
  }

    //that.initFunctionJsService.executeFunction();
    // const that = this;

    // that.isEndExamObservable.currentIsEndExam.subscribe( res => {
    //   if(res) {
    //     that.isEndExam = res;
    //   }
    // });

    // that.examProgressBarObservable.currentMessage.subscribe( res => {
    //   if(res) {
       
    //    that.calculateProgressExam();
    //   } else {
    //     that.calculateProgressExam();
    //   }
    // });


    // if(
    //   typeof localStorage.getItem("user") !== 'undefined' && 
    //   localStorage.getItem("user") != null
    // ){
    //   that.userData = JSON.parse(localStorage.getItem('user'));
    // }
  //}

  // ngAfterViewInit(): void {
  //   const that = this;
  //   that.initFunctionJsService.executeFunction();
  // }
  // calculateProgressExam(): void {
  //   const that = this;
  //   that.totalAnswersChecked = 0;
  //   if(typeof localStorage.getItem("questions") !== 'undefined' && localStorage.getItem("questions") != null) {
  //     let timeExam = Number(localStorage.getItem('seconds'));
  //     if(timeExam > 0){
  //       let questions: any[] = JSON.parse(localStorage.getItem("questions"));
  //       that.totalQuestions = (questions.length);
  //       questions.forEach(question => {
  //         that.numOption = 0;
  //         question.data.answers.forEach(element => {
  //           if(element.checked != null && element.checked == true){
  //             that.numOption = that.numOption + 1;
  //           }
  //         });
  //         if(that.numOption > 0){
  //           that.totalAnswersChecked = that.totalAnswersChecked + 1;
  //         }
  //       });

  //       // console.log((that.totalAnswersChecked / 100) * 100);

  //       that.totalPorcertange = Math.round((that.totalAnswersChecked / 100) * 100);
  //       that.totalNoAnswersChecked = (that.totalQuestions - that.totalAnswersChecked);
  //       that.isProgressBar = true;

  //     } else {
  //       that.isProgressBar = false;
  //     }

  //   } else {
  //     this.isProgressBar = false;
  //   }
  // }


}
