import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import setupGraphQL from './graphql/index.js';

dotenv.config();

const app = express();

connectDB();
setupGraphQL(app);

export default app;