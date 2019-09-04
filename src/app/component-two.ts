import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'component-two',
  template: 'Component Two with route param <b><code>ID: {{ id }}</code></b>',
})
export default class ComponentTwo implements OnInit {
  id = 0;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
