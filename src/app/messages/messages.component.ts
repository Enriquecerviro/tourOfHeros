/**
 * The MessagesComponent should display 
 * all messages, including the message sent
 * by the HeroService when it fetches heroes.
 */

import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }
//Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 
/**
 * The messageService property must be public
 * because you're going to bind to it in the template.
 * ANGULAR ONLY BINDS TO PUBLIC COMPONENT PROPERTIES
 */  

  ngOnInit() {
  }

}
