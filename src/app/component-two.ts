import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'component-two',
  template: `
    <p>Component Two</p>

    <nav>
      <a [routerLink]="['child-one']">Child One</a>
      &nbsp;
      <a [routerLink]="['child-two']">Child Two</a>
    </nav>

    <div style="color: red; margin-top: 1rem;">
      Component Two's router outlet:
    </div>
    <div style="border: 2px solid red; padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
  `,
})
export default class ComponentTwo implements OnInit {
  id = 0;
  sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
