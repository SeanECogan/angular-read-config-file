import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'readfromconfigfile';

  configValue: string;

  constructor(private config: ConfigService) {
    this.configValue = '';

    this.reloadConfig();
  }

  readConfigValue() : string {
    return this.config.getConfig().configValue;
  }

  reloadConfig() {
    console.log('reloading config...');

    this.config.loadConfig()
      .then(() => {
        console.log('reloaded config, updating values');
        this.configValue = this.readConfigValue();
      });      
  }
}
