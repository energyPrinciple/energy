import { Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalSurveyComponent } from './modals/modal-survey/modal-survey.component';
declare var $:any;

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

constructor(private modalService: BsModalService) {}

  ngOnInit() {
    setTimeout(()=>{
        this.modalRef = this.modalService.show(ModalSurveyComponent,this.config);
    }, 3000);
    // this.openModalWithComponent();

  }


}
