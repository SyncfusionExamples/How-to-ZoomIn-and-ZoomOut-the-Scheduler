import { Component, ViewChild } from '@angular/core';
import {
  EventSettingsModel, ScheduleComponent, DayService, WeekService, WorkWeekService, MonthService, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from 'src/app/datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DayService, WeekService, WorkWeekService, MonthService, ResizeService, DragAndDropService]
})
export class AppComponent {
  @ViewChild('scheduleObj', null)
  public scheduleObj: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 3, 2);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  onZoomIn(): void {
    let scheduleWidth: any = this.scheduleObj.width;
    let val: any = scheduleWidth.toString().substring(0, scheduleWidth.length - 1);
    this.scheduleObj.width = parseInt(val) - 1 + '%';
    this.scheduleObj.refreshEvents();
  }
  onZoomOut(): void {
    let scheduleWidth: any = this.scheduleObj.width;
    let val: any = scheduleWidth.toString().substring(0, scheduleWidth.length - 1);
    this.scheduleObj.width = parseInt(val) + 1 + '%';
    this.scheduleObj.refreshEvents();
  }
}
