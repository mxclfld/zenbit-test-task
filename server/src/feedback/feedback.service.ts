import { Injectable } from '@nestjs/common';
import { Feedback, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async feedback(
    feedbackWhereUniqueInput: Prisma.FeedbackWhereUniqueInput,
  ): Promise<Feedback | null> {
    return this.prisma.feedback.findUnique({
      where: feedbackWhereUniqueInput,
    });
  }

  async allFeedback(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FeedbackWhereUniqueInput;
    where?: Prisma.FeedbackWhereInput;
    orderBy?: Prisma.FeedbackOrderByWithRelationInput;
  }): Promise<Feedback[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.feedback.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFeedback(data: Prisma.FeedbackCreateInput): Promise<Feedback> {
    return this.prisma.feedback.create({
      data,
    });
  }
}
