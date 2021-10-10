import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leftbar-small',
    templateUrl: './leftbar-small.component.html',
    styleUrls: ['./leftbar-small.component.css'],
})
export class leftBarSmallComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    goHome() {
        this.router.navigate(['/']);
    }
}
