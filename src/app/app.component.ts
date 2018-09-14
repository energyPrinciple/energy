import { Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalSurveyComponent } from './modals/modal-survey/modal-survey.component';
declare var $:any;
import {ActivatedRoute, Params, Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 modalRef: BsModalRef;
 config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'chimpModal'
  };
  statusPage;
constructor(private modalService: BsModalService,
            private router: Router,
            private activatedRoute: ActivatedRoute
          ) {}

  ngOnInit() {
  this.router.events.subscribe((event)  => {

      if(event instanceof NavigationStart) {
          if ((event.url != '/admin') && (event.url != '/addtest') && (event.url != '/upload') && (this.statusPage != 0) ) {
                this.statusPage = 0;
                setTimeout(()=>{
                    this.modalRef = this.modalService.show(ModalSurveyComponent,this.config);
                }, 3000);
        }
      }
    });

    // this.openModalWithComponent();

  }


}
