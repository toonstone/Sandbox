import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: string[];

  isMessages = (): boolean => {
    return this.messages.length > 0;
  }

  // The messageService property must be public as it is bound in the template.
  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

  clear = () => {
    this.messages = [];
    this.messageService.clear();
  }

}
