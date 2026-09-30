import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { UiStepper,AiChatRequest,AiChatResponse } from '../../model';
import { ChatAssistance } from '../../services/chat-assistance';
import { firstValueFrom } from 'rxjs';

interface ChatMessage {
  role: 'assistant' | 'user';
  text: string;
}

@Component({
  imports: [AvatarModule, ButtonModule, FormsModule],
  selector: 'app-chatai',
  templateUrl: './chatai.html',
})
export class Chatai {

  private readonly aiChatService = inject(ChatAssistance);

  user_prompt = 'hello world';
  answer = signal<any>('');

  loading = false;

  stepper: UiStepper | null = null;

  async askAI(): Promise<void> {

    const prompt = this.user_prompt.trim();

    if (!prompt || this.loading) {
      return;
    }

    this.loading = true;
    this.answer.set('');

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
      this.answer.set(result?.response_text);
      console.log("result", result?.response_text)

      if (result.ui_stepper) {
        this.stepper = result.ui_stepper;
      }

    } catch (error) {

      console.error('AI Assistant Error:', error);

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