import {Component} from 'angular2/core';
import {CourseComponent} from './course.component';
import {AuthorComponent} from './author.component';
import "rxjs/Rx";


@Component({

    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1><courses></courses>
    <author></author>
    `,
    directives: [CourseComponent, AuthorComponent]
})
export class AppComponent { }