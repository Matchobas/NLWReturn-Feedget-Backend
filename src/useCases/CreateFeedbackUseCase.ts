import { FeedbacksRepositories } from "../repositories/FeedbacksRepositories";

interface CreateFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}


export class CreateFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepositories;

  constructor(feedbacksRespository: FeedbacksRepositories) {
    this.feedbacksRepository = feedbacksRespository
  }

  async execute({ type, comment, screenshot }: CreateFeedbackUseCaseRequest) {
    const feedback = await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    return feedback;
  }
}