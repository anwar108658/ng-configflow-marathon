export interface AiChatRequest {
  prompt: string;
}

export interface UiStepper {
  step: number;
  total: number;
  status: 'pending' | 'running' | 'completed' | 'error';
  message: string;
}

export interface AiChatResponse {
  response: string;
  ui_stepper?: UiStepper;
}