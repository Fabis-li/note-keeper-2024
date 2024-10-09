import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ShellComponent } from "./core/components/shell/shell.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
