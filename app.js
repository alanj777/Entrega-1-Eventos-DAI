import express from 'express';
import eventRoutes from './routes/eventRoutes.js';
import userRoutes from './routes/userRoutes.js';
import enrollmentRoutes from './routes/enrollmentRoutes.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la API
app.use('/event', eventRoutes);
app.use('/user', userRoutes);
app.use('/event/enrollment', enrollmentRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});