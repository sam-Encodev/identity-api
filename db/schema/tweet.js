import { Schema } from "mongoose";

const dataSchema = new Schema({
 tweet: {
  type: String,
 },
 status: {
  type: String,
 },
 payload: {
  type: Object,
 },
});

export { dataSchema };
