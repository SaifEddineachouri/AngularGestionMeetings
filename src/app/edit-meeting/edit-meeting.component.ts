import { Meeting } from './../Model/MeetingClass';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})

export class EditMeetingComponent implements OnInit {
  @Input() Meeting : Meeting;
  @Output() editedMeeting = new EventEmitter<Meeting>();

  constructor() { }

  editMeeting(id : HTMLInputElement, titre : HTMLInputElement, Date_Deb : HTMLInputElement,Date_Fin : HTMLInputElement){
    let updatedMeeting = new Meeting(parseInt(id.value),titre.value,new Date(),new Date());
    this.editedMeeting.emit(updatedMeeting);

    id.value = "";
    titre.value = "";
    Date_Deb.value = "";
    Date_Fin.value= "";

  }

  ngOnInit() {
  }

}
