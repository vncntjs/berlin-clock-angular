import { Component, OnInit } from "@angular/core";
import { Observable, timer } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  readonly time$: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));
  readonly fiveHourRowElements = new Array(4).fill(null);
  readonly singleHourRowElements = new Array(4).fill(null);
  readonly fiveMinuteRowElements = new Array(11).fill(null);
  readonly singleMinuteRowElements = new Array(4).fill(null);
  fillCircle = false;
  fillFiveHourRowElements = 0;
  fillSingleHourRowElements = 0;
  fillFiveMinuteRowElements = 0;
  fillSingleMinuteRowElements = 0;

  ngOnInit() {
    this.time$.subscribe((time) => {
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      this.fillCircle = !!(seconds % 2);
      this.fillFiveHourRowElements = Math.floor(hours / 5);
      this.fillSingleHourRowElements = hours % 5;
      this.fillFiveMinuteRowElements = Math.floor(minutes / 5);
      this.fillSingleMinuteRowElements = minutes % 5;
    });
  }

  isQuarterHourMark(index: number): boolean {
    return !((index + 1) % 3) && this.fillFiveMinuteRowElements > index;
  }
}
