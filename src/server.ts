import express from 'express';
import { feedbackRoutes } from './routes';

const app = express();

app.use(express.json());
app.use(feedbackRoutes);

app.listen(3333, () => {
  console.log('Running server on port 3333!');
});