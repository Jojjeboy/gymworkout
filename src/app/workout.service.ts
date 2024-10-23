import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  private apiBaseUrl = 'https://exercisedb.p.rapidapi.com/';
  private apiKey = '62f197cbbfmsh6d4630ef948a97ep169244jsn078bdcf93423';
  private apiHost = 'exercisedb.p.rapidapi.com';


  http = inject(HttpClient);
  headers = new HttpHeaders()
    .set('x-rapidapi-key', this.apiKey)
    .set('x-rapidapi-host', this.apiHost);

  $workouts = this.getWorkouts();
  $bodyPartList = this.getBodyPartList();
  $bodyPart = this.getBodyPartList();


  getWorkouts(){
    return this.http.get<any>(this.apiBaseUrl + 'exercises?limit=100000&offset=0', {'headers': this.headers})
  }


  getBodyPartList(){
    return this.http.get<any>(this.apiBaseUrl +'exercises/bodyPartList', {'headers': this.headers})
  }


  getBodyPart(bodyPart: string){
    return this.http.get<any>(this.apiBaseUrl +'exercises/bodyPart/' + bodyPart + '?limit=100000&offset=0', {'headers': this.headers})
  }

  getExcerciseById(id: any){
    return this.http.get<any>(this.apiBaseUrl +'exercises/exercise/' + id, {'headers': this.headers})
  }



}
