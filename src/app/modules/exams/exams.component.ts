import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { InitFunctionJsService } from '../../shared/services/init-function-js.service';
declare var jquery: any;
declare var $: any;

export interface dataComponent {
  title: string;
  progressExam: boolean;
}

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  public data: dataComponent = {
    title: '',
    progressExam: false
  };

  constructor(
    private initFunctionJsService: InitFunctionJsService, 
    public activatedRoute: ActivatedRoute,
    public router: Router
    // public activatedRouteSnapshot: ActivatedRouteSnapshot
  ) { 
    const that = this;
    //const data: dataComponent = null;
    
    // activatedRoute.
    that.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { 
        const data = that.activatedRoute.snapshot.firstChild.data;
        that.data.title = data.title;
        that.data.progressExam = data.progressExam;

        
        
        // $(".ecaps-page-wrapper").toggleClass("menu-collasped-active");
        // this._activatedRoute.snapshot is up to date
      }
    });
    // activatedRoute.url.subscribe((res) => {
    //   console.log(res);
    //   const data = activatedRoute.snapshot.firstChild.data;
    //   that.data.title = data.title;
    //   console.log(that.data);
    // });

    // console.log(this.activatedRoute.children);
    // that.activatedRoute.url.subscribe(() => {
    //   console.log(this.activatedRoute.snapshot.data);
    //  });
  }

  ngOnInit(): void {
    const that = this;
    // if(that.data.progressExam == false) {
    //   $(".ecaps-page-wrapper").removeClass("sidemenu-hover-active");
    //   $(".ecaps-page-wrapper").addClass("sidemenu-hover-deactive");
    //   $('#ecapsSideNav').slimscroll({
    //     height: '100%',
    //     size: '3px',
    //     position: 'right',
    //     color: '#9c9c9c',
    //     alwaysVisible: false,
    //     distance: '0px',
    //     railVisible: false,
    //     wheelStep: 15
    //   });
    // }
  }

  ngAfterViewInit(): void {
    const that = this;
    that.initFunctionJsService.executeFunction();
  }

}
