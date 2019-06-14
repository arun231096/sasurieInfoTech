import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SitDataService {

    constructor(private http: Http) {}

    getTeamList() {
        return this.http.get("https://sasurieinfo.tech/sit_web_backend/api/studentController.php?opt=readall")
        .map(
            (response : Response) => {
                const data = response.json();
                return data;
            }
        )
        .catch(
            (error : Response) => {
                console.log(error);
                return Observable.throw('500 Internal Server Error');
            }
            );
    }
    getProjectList() {
        return this.http.get("https://sasurieinfo.tech/sit_web_backend/api/projectController.php?opt=readall")
        .map(
            (response : Response) => {
                const data = response.json();
                return data;
            }
        )
        .catch(
            (error : Response) => {
                console.log(error);
                return Observable.throw('500 Internal Server Error');
            }
            );
    }
}
