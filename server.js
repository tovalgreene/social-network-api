import express from 'express';
import { connect } from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import thoughtRoutes from './routes/thoughtRoutes.js';
import reactionRoutes from './routes/reactionRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

connect('mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api', reactionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
