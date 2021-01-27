import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faFileAlt, 
  faChevronRight, 
  faListUl, 
  faClock, 
  faPlay, 
  faHistory, 
  faChevronLeft, 
  faArrowCircleLeft, 
  faArrowCircleRight, 
  faSave, 
  faSpinner, 
  faCheck, 
  faCheckCircle,
  faPen, 
  faCheckSquare, 
  faSquare,
  faTimes,
  faUserEdit,
  faFileSignature,
  faLaptop,
  faStopwatch,
  faPlus,
  faInfoCircle,
  faTrash,
  faBan,
  faFilter,
  faSync,
  faPlusCircle,
  faSignOutAlt,
  faPenAlt,
  faEdit,
  faRobot,
  faList,
  faQuestionCircle,
  faSortDown,
  faSortUp,
  faCaretLeft,
  faCaretRight,
  faCaretDown,
  faMinus,
  faChevronDown,
  faCircle,
  faUser,
  faExclamation, faUsers, faLock,
  faBookmark,
  faListOl,
  faCaretSquareDown,
  faEye,
  faHandPointRight,
  faLanguage,
  faShare,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';

 import { 
  faSquare as farSquare, 
  faCheckSquare as farCheckSquare, 
  faQuestionCircle as farQuestionCircle, 
  faCircle as farCircle,
  faBookmark as farBookmark,
  faArrowAltCircleRight
} from '@fortawesome/free-regular-svg-icons';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbAlertModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckIntervalGuard } from './guards/check-interval.guard';
import { VerifyTokenGuard } from './guards/verify-token.guard';
import { ResetPasswordObservable } from './observables/reset-password.observable';


@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent],
  imports: [
    // FormsModule,
    // CommonModule,
    // ReactiveFormsModule,
    // FontAwesomeModule,
    NgbAlertModule,
    NgbProgressbarModule
  ],
  exports: [
    // FormsModule,
    // FontAwesomeModule,
    // ReactiveFormsModule,
    // CommonModule
    SidebarComponent, HeaderComponent, FooterComponent, NgbAlertModule, NgbProgressbarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    CheckIntervalGuard,
    VerifyTokenGuard,
    ResetPasswordObservable
  ]
})
export class SharedModule { 

  constructor() { 
    library.add(
      faFileAlt, 
      faChevronRight, 
      faChevronDown, 
      faListUl, 
      faClock, 
      faPlay, 
      faHistory, 
      faChevronLeft, 
      faArrowCircleLeft, 
      faArrowCircleRight,
      faSave,
      faSpinner,
      faCheck,
      faPen,
      faCheckCircle,
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faTimes,
      faUserEdit,
      faFileSignature,
      faLaptop,
      faStopwatch,
      faTimes, 
      faPlus, 
      faInfoCircle, 
      faCheckCircle, 
      faCheck, 
      faPen, 
      faTrash, 
      faArrowCircleLeft, 
      faBan, 
      faFilter, 
      faSync, 
      faSpinner,
      faPlusCircle,
      faSignOutAlt,
      faPenAlt,
      faEdit,
      faRobot,
      faList,
      faQuestionCircle,
      farQuestionCircle,
      faSortDown,
      faSortUp,
      faCaretRight,
      faCaretLeft,
      faCaretDown,
      faMinus,
      faPlus,
      faCircle,
      farCircle,
      faUser,
      faExclamation,
      faUsers,
      faLock,
      faBookmark,
      farBookmark,
      faListOl,
      faEye,
      faHandPointRight,
      faLanguage,
      faShare,
      faBan,
      faCertificate
    );

  }
}
