import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from './model/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor(private http: HttpClient) { }

  getAgents(): Observable<Agent[]>{
    return this.http.get<Agent[]>("/api/agents")
  }
}
