import {Component,OnInit,ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator, MatTableDataSource} from '@angular/material';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'table-c',
  styleUrls: ['table-c.component.css'],
  templateUrl: 'table-c.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableCComponent implements OnInit{
  /*dataSource = ELEMENT_DATA;
  //Try*/
  columnsToDisplay = ['name'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  expandedElement: PeriodicElement;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  Job: string;
  Country: string;
  Company: string;
  Salary: string;
  Date: string;
  description:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
    {
    Job: 'Front-end Developer',
    Country: 'Spain',
    Company: 'HackUpc',
    Salary: '6000$',
    Date: '21/10/2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  
];
