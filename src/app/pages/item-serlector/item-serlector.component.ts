import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatChipRow} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-item-serlector',
  standalone: true,
    imports: [
        MatGridList,
        MatGridTile,
        MatChipRow,
        MatIcon
    ],
  templateUrl: './item-serlector.component.html',
  styleUrl: './item-serlector.component.css'
})
export class ItemSerlectorComponent {

  chooses: number[] = [1,2,3,4,5,6,7,8,9];

  names = new Map<number, string>([
    [1,"Bulbasaur"], [2, "Ivysaur"], [3, "Venusaur"],
    [4, "Charmander"], [5, "Charmeleon"], [6, "Charizar"],
    [7, "Squirtle"],[8, "Wartortle"],[9, "Blastoise"]
  ]);

}
