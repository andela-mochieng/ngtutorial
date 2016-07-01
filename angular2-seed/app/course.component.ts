import {Component} from 'angular2/core';
import {CourseService} from './courses.service';
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{ title }}
    <input type='text' autogrow/>
    <ul>
        <li *ngFor="#course of courses">
         {{ course }}
         </li>
    </ul>
    `,
    providers: [CourseService],
    directives :[AutoGrowDirective]
})
export class CourseComponent {
    title = 'This is the title of the courses';
    courses;
    constructor(courseService: CourseService ) {
        this.courses = courseService.getCourses();
    }
}