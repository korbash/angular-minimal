import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../api';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent implements OnInit {
  setings_str = 'placeholder';
  constructor(private apiService: DefaultService) {}

  ngOnInit() {
    this.loadSettings();
  }

  private loadSettings() {
    this.apiService.getTablesInfoSchemaTableGet().subscribe((data) => {
      this.setings_str = JSON.stringify(data, null, 2);
    });
  }
}
