import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Hero }    from './hero';
@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() {
        this.submitted = true;
        console.log('this submited', this.submitted);
    }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    //active = true;
    newHero() {
        //this.model = new Hero(42, '', '');
        this.submitted = true;
        //this.active = false;
        //setTimeout(() => this.active = true, 0);
    }
}
