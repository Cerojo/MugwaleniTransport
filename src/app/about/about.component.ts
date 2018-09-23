import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  staff = [
    new Staff("Ronald Mathevula","Chief Executive Officer (Founder)","","./assets/images/Staff/Ronald.jpg"),
    new Staff("Khethiwe Hlungwana","Business Manager","","./assets/images/Staff/khethiwe.jpeg"),
    new Staff("Rhulani Baloyi","Admin Clerk","","./assets/images/Staff/Rhulani.jpeg"),
    new Staff("Lydia Mokoena","Health and Safety Officer","","./assets/images/Staff/Lydia.jpeg"),
    new Staff("Tshepo Lerata","Driver","","./assets/images/Staff/Tshepo.jpeg"),
    new Staff("Casius Mathe","Driver","","./assets/images/Staff/Casius.jpeg"),
    new Staff("Nkwinika shadrack","Driver","","./assets/images/Staff/Nkwinika.jpeg"),
    new Staff("Mushwana Emanuel","Driver","","./assets/images/Staff/Mushwana.jpeg"),
    new Staff("Dino Nesengani","Driver","","./assets/images/Staff/Dino.jpeg"),
    new Staff("Menzi Mthetwa","Driver","","./assets/images/Staff/Menzi.jpeg"),
    new Staff("Wiseman Mathevula","Driver","","./assets/images/Staff/Wiseman.jpeg"),
    new Staff("Siyabonga Nkambule","Driver","","./assets/images/Staff/Siyabonga.jpeg"),
    new Staff("Mlindiswa Ndlangisa","Driver","","./assets/images/Staff/Mlindiswa.jpeg"),
    new Staff("Nyoni Rodric","General worker","","./assets/images/Staff/Rodric.jpeg")
  ];

  staff1: Staff;
  staff2: Staff;
  staff3: Staff;
  staff4: Staff;
  staff5: Staff;
  staff6: Staff;
  staff7: Staff;
  staff8: Staff;
  staff9: Staff;
  staff10: Staff;
  staff11: Staff;
  staff12: Staff;
  staff13: Staff;
  staff14: Staff;

  constructor() { 
    this.staff1 = this.staff[0];
    this.staff2 = this.staff[1];
    this.staff3 = this.staff[2];
    this.staff4 = this.staff[3];
    this.staff5 = this.staff[4];
    this.staff6 = this.staff[5];
    this.staff7 = this.staff[6];
    this.staff8 = this.staff[7];
    this.staff9 = this.staff[8];
    this.staff10 = this.staff[9];
    this.staff11 = this.staff[10];
    this.staff12 = this.staff[11];
    this.staff13 = this.staff[12];
    this.staff14 = this.staff[13];
  }

  ngOnInit() {
  }

}
