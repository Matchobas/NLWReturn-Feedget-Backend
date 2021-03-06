import { Feedback } from "@prisma/client";

export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepositories {
  create: (data: FeedbackCreateData) => Promise<Feedback>;
}