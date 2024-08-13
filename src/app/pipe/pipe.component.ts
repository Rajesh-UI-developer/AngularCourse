import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EllipsePipe } from './pipesamples/ellipse.pipe';
import { ManualPipe } from './manual.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, EllipsePipe,ManualPipe],

  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
  today = new Date();
  price = 1234.56;
  amount = 1234.567;
  fraction = 0.25;
  data = { name: 'John', age: 30 };
  ellipseContent: string = " odio, commodi consectetur, ex nam quidem. Culpa, quasi est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis alias mollitia non veritatis quisquamillo repudiandae et. Vitae molestiae aliquid eligendi nesciunt voluptatibus debitis unde repellendus vero blanditiisid!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae sunt perspiciatis libero quis vel istepraesentiumab voluptas ipsum fugiat odio, commodi consectetur, ex nam quidem. Culpa, quasi est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis alias mollitia non veritatis quisquamillo repudiandae et. Vitae molestiae aliquid eligendi nesciunt voluptatibus debitis unde repellendus vero blanditiisid!"

}
