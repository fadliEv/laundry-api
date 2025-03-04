import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "secretkey123",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:5173"
};
