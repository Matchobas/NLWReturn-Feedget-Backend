import { Feedback } from "@prisma/client";
import { prisma } from "../../prisma";
import { FeedbacksRepositories, FeedbackCreateData } from "../FeedbacksRepositories";

export class PrismaFeedbacksRepository implements FeedbacksRepositories {
  async create({type, comment, screenshot}: FeedbackCreateData): Promise<Feedback> {
    const feedback = await prisma.feedback.create({
      data: {
        comment,
        type,
        screenshot,
      }
    });

    return feedback;
  };
}