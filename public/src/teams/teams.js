import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Teams {

  constructor(HttpClient) {
    this.http = HttpClient;
  }

  activate() {
    return this.getTeams();
  }

  getTeams() {
    this.http.fetch('teams')
      .then(response => response.json())
      .then(data => {
        this.teams = data;
      })
      .catch(error => {
        alert('Error fetching teams!');
      });
  }
}