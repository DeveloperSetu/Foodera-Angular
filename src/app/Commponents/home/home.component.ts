import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  MessageSubmit(){
    alert(` ✦•┈๑⋅⋯ THANK YOU! 𓏲ּ⋆.˚🦋༘⋆ ⋯⋅๑┈•✦`)
  }
}
