import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs";

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html'
})
export default class ProductDetails implements OnInit, OnDestroy {
    id: number;
    subscription: Subscription;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
