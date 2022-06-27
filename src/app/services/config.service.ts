import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Config {
  configValue: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: Config;

  constructor(private http: HttpClient) {
    this.config = {
      configValue: 'Default'
    };
  }

  loadConfig(): Promise<void> {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });


    return this.http.get<Config>('/assets/app.config.json', {
      headers: headers
    })
      .toPromise()
      .then(data => {
        this.config = data;
      });
  }

  getConfig(): Config {
    return this.config;
  }

}
