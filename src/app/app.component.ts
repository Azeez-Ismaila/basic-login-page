import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'second-tutorial-app';
  serverElements: any = [{ type: 'server', name: 'zyzman', content: 'write' }];
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    blueprintName: string;
    blueprintContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
    });
  }
}
