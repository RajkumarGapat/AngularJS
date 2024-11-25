import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
     <p>This is a warning, You are in danger</p>    <!--This step is called inline component adding.. -->
    `,
    styles: [
        `
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
        
        `
    ] 
})
export class WarningAlertComponent {

}