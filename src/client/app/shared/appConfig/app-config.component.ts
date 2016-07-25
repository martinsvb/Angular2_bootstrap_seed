import { Injectable } from '@angular/core';

@Injectable()
export class appConfig {
    
    hostUrl: string = 'http://spanielovasvj.cz/api/';

    hostUpload: string = `${this.hostUrl}/upload`;
}
