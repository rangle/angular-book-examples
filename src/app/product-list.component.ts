import {Component} from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export default class ProductListComponent {
    products = [
        {name: 'Russet Apples', id: '123'},
        {name: 'McIntosh Apples', id: '456'},
        {name: 'Granny Smith Apples', id: '789'}
    ]
}
