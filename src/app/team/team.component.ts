import { Component, OnInit } from '@angular/core';
import { SitDataService } from '../sitData.Service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private teamService : SitDataService) { }
  team = [];
  item = false;
  ngOnInit() {
    this.teamService.getTeamList().subscribe(      
      (data : any[])=> {  
        this.team = data;
        this.item = true;
        console.log(data);
      },
      (error : any) => {
        console.log(error);
      }
    );
  }

}
