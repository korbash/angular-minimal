import { Component, OnInit } from '@angular/core';
import { DefaultService, SettingsOutput } from '../../api';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  setings_str = "";
  constructor(private apiService: DefaultService) { }

  ngOnInit() {
    this.loadSettings();
  }

  private loadSettings() {
    this.apiService.getSettingsSettingsGet().subscribe((data: SettingsOutput) => {
      this.setings_str = JSON.stringify(data, null, 2);
    });
  }
}
