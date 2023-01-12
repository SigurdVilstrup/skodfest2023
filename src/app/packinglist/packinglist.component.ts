import { Component, OnInit } from '@angular/core';

interface ChecklistItem {
  title: string;
}

@Component({
  selector: 'app-packinglist',
  templateUrl: './packinglist.component.html',
  styleUrls: ['./packinglist.component.scss'],
})
export class PackinglistComponent implements OnInit {
  checklistItems: ChecklistItem[] = [
    { title: 'Drikkevarer - Øl, vin, drinks, mm.' },
    { title: 'Sovepose' },
    { title: 'Liggeunderlag' },
    { title: 'Telt' },
    { title: 'Regntøj' },
    { title: 'Dine venner' },
    { title: 'Regntøj' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
