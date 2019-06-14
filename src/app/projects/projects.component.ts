import { Component, OnInit } from '@angular/core';
import { SitDataService } from '../sitData.Service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [];
  item = false;
  constructor(private projectService: SitDataService) { }

  ngOnInit() {
    this.projectService.getProjectList().subscribe(      
      (data : any[])=> {  
        this.projects = data;
        this.item = true;
        console.log(data);
      },
      (error : any) => {
        console.log(error);
      }
    );
  }

}
