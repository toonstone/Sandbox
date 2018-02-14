import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  isMessages: boolean;

  messages: string[];

  // The messageService property must be public as it is bound in the template.
  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.isMessages = this.messageService.messages.length > 0;
    this.messages = this.messageService.messages;
  }

  clear = () => {
    this.messageService.clear();
  }

}
