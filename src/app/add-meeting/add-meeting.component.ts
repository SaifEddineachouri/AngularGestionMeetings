import { Meeting } from './../Model/MeetingClass';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {

    @Output() addEvent = new EventEmitter<Meeting>()

    constructor() { }

    addMeeting(id : HTMLInputElement, titre : HTMLInputElement, Date_Deb : HTMLInputElement, Date_Fin : HTMLInputElement){
      var newMeeting = new Meeting(parseInt(id.value),titre.value,new Date(),new Date());
      console.log(newMeeting);
      this.addEvent.emit(newMeeting);
  
      id.value = "";
      titre.value = "";
      Date_Deb.value = "";
      Date_Fin.value= "";
    }

    ngOnInit() {
    
    }

}
