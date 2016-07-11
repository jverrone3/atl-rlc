import {inject} from 'aurelia-framework';
import {TeamsService} from './teams.service';

@inject(TeamsService)
export class Teams {

  constructor(TeamsService) {
    this.teamsService = TeamsService;
  }

  activate() {
    return this.getTeams();
  }

  getTeams() {
    this.teamsService.getTeams()
      .then(data => {
        this.teams = data;
      })
      .catch(error => {
        alert('Error fetching teams!');
      });
  }

  createTeam(name) {
    var team = {
      name: name
    };

    this.teamsService.createTeam(team)
      .then(teams => {
        this.teams = teams;
      })
      .catch(error => {
        alert('Error creating team!');
      })

    this.newTeam = '';
  }

  deleteTeam(id) {
    this.teamsService.deleteTeam(id)
      .then(teams => {
        this.teams = teams;
      })
      .catch(error => {
        alert('Error deleting team!');
      })

  }
}
