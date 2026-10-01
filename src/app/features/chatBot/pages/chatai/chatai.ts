import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { PIcon } from '@primeicons/angular/p-icon';
import { firstValueFrom } from 'rxjs';

import { UiStepper } from '../../model';
import { ChatAssistance } from '../../services/chat-assistance';
import { MarkdownModule } from 'ngx-markdown';

interface ChatMessage {
  role: 'assistant' | 'user';
  text: string;
}

@Component({
  selector: 'app-chatai',
  standalone: true,
  imports: [
    AvatarModule,
    ButtonModule,
    FormsModule,
    PIcon,
    MarkdownModule
  ],
  templateUrl: './chatai.html',
})
export class Chatai {

  private readonly aiChatService = inject(ChatAssistance);

  user_prompt = '';
  recentChats = []

  messages = signal<ChatMessage[]>([]);

  loading = false;

  stepper: UiStepper | null = null;


  async askAI(): Promise<void> {

    const prompt = this.user_prompt.trim();

    if (!prompt || this.loading) {
      return;
    }

    // 1. Immediately show user's question
    this.messages.update(messages => [
      ...messages,
      {
        role: 'user',
        text: prompt
      }
    ]);

    // Clear input
    this.user_prompt = '';

    this.loading = true;

    this.stepper = {
      step: 0,
      total: 0,
      status: 'running',
      message: 'AI is processing your request...'
    };

    try {

      const result:any = await firstValueFrom(
        this.aiChatService.ask(prompt)
      );

      console.log('AI result:', result);

      // 2. Add AI response to conversation
      if (result?.response_text) {

        this.messages.update(messages => [
          ...messages,
          {
            role: 'assistant',
            text: result.response_text
          }
        ]);
      }

      // 3. Update AI stepper
      if (result?.ui_stepper) {
        this.stepper = result.ui_stepper;
      }

    } catch (error) {

      console.error('AI Assistant Error:', error);

      // Optional: show error inside conversation
      this.messages.update(messages => [
        ...messages,
        {
          role: 'assistant',
          text: 'Sorry, something went wrong while processing your request.'
        }
      ]);

      this.stepper = {
        step: 0,
        total: 0,
        status: 'error',
        message: 'Something went wrong.'
      };

    } finally {

      this.loading = false;
    }
  }
}