import { Component, OnInit } from "@angular/core"

@Component({
	selector: "angular-micro-front-end-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	title = "micro-front-end"

	ngOnInit(): void {
		console.log("we have breakpoints and live!")
	}
}
