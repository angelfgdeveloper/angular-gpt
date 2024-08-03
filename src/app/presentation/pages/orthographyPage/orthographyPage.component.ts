import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
import { Message } from '@interfaces/message.interface';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,

    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  public messages = signal<Message[]>([ {text: 'Hola Mundo', isGpt: false } ]);
  public isLoading = signal(false);

  handleMessage(prompt: string) {
    console.log({ prompt });
  }

  handleMessageWithFile(event: TextMessageEvent) {
    console.log({ event });
  }

  handleMessageWithSelect(event: TextMessageBoxEvent) {
    console.log({ event });
  }

}
