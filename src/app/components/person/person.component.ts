import {Component, Directive, OnInit} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

  btnDisabled: boolean = false;
  btnClick : boolean = false;
  btnLabelMessage: string ='Click on me';
  btnClickMessage: string  = 'This is my message';
  inputValue : string = '';
  listOfUsers: Array<string> = ['U1','U2','U3'];

  cardPerson =  [
    {
    src:"https://media.licdn.com/dms/image/C4E0BAQF992P7GC7fiA/company-logo_200_200/0?e=2159024400&v=beta&t=eg8edeRDePKzD6FojQzfI6xQz-U9NgqVE2qQmVW4VSM",
    title:"title",
    description:"dasdsad"
    },
    {
      src:"https://media.licdn.com/dms/image/C4E0BAQF992P7GC7fiA/company-logo_200_200/0?e=2159024400&v=beta&t=eg8edeRDePKzD6FojQzfI6xQz-U9NgqVE2qQmVW4VSM",
      title:"title",
      description:"dasdsad"
    },
    ];

  bulletinBoard = {
    titleBoard: 'Board',
    bulletinList:[
      {
        title:'myTitle',
        score:1
      },
      {
        title:'myTitle',
        score:9
      },
      {
        title:'myTitle',
        score:5
      }
    ]
  };

  onClickButton(){
    this.btnClick = true;
    setTimeout(()=>{
       this.btnClick = false;
    },2000);
  }

  onLabelChange(){
    return (!this.btnClick)?'label-red-bg':'';
  }

  constructor() {}

  ngOnInit() {}

}
