import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FeedbackService } from './feedback/feedback.service';
import { Feedback as FeedbackModel } from '@prisma/client';
import { CreateFeedbackDto } from './feedback/create-feedback.dto';

@Controller()
export class AppController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get('feedback')
  async getAllFeedback(): Promise<FeedbackModel[]> {
    return this.feedbackService.allFeedback({});
  }

  @Post('feedback')
  async createFeedback(
    @Body() feedbackData: CreateFeedbackDto,
  ): Promise<FeedbackModel> {
    const { name, email, message } = feedbackData;
    return this.feedbackService.createFeedback({
      name,
      email,
      message,
    });
  }
}
