import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    // @Input() - use when want the rating passed into this component/directive when it is acting as a nested component
    @Input() rating: number = 4;

    starWidth: number;

    // only watches for @Input() changes use input properties
    // use property binding e.g. <pm-star [rating]='product.starRating'></pm-star>
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
