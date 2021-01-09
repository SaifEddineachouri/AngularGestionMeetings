import { Meeting } from './../Model/MeetingClass';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-meetings',
  templateUrl: './list-meetings.component.html',
  styleUrls: ['./list-meetings.component.css']
})
export class ListMeetingsComponent implements OnInit {
  Meetings : Meeting[];
  action : string;
  currentIndex : number;
  currentMeeting : Meeting;

  saveMeetings(){
    window.localStorage.setItem("Meeting", JSON.stringify(this.Meetings));
  }

  Getmeeting(indice:number) {
    return Meeting[indice] 
  ;}

  addMeeting(){
    this.action = "add";
  }

  pushMeeting(m : Meeting){
    this.Meetings.push(m);
    this.saveMeetings();
    this.action = ""; 
  }

  showEditMeeting(m : Meeting, indice : number){
    this.action= "edit";
    this.currentIndex = indice;
    this.currentMeeting = m;
  }

  editMeeting(m : Meeting){
    this.Meetings[this.currentIndex] = m;
    this.saveMeetings();
    this.action = "";
  }

  deleteMeeting(indice : number){
    if(confirm("Etes-vous sûre de vouloir supprimer Meeting " + this.Meetings[indice].titre)){
      this.Meetings.splice(indice, 1);
      this.saveMeetings();
    }
  }
  
  ngOnInit(): void {
    
    if(window.localStorage.getItem("Meetings")){
      this.Meetings = JSON.parse(window.localStorage.getItem("Meetings"));
    }
    else{
      this.Meetings = [];
    }



    this.action = "";
  
}
}
