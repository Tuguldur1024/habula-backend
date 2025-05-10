import mongoose, { Schema } from "mongoose";

export type Location = {
  type: "Point";
  coordinates: [number, number];
};

export type Report = {
  _id: Schema.Types.ObjectId;
  imageUrl : string;
  userId : Schema.Types.ObjectId;
  location: Location;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

const ReportSchema = new Schema<Report>({
    imageUrl: { type: String, required: true },
    location: {
      type: { type: String, enum: ["Point"], required: true },
      coordinates: { type: [Number], required: true },
    },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})    


const ReportModel = mongoose.model<Report>("Report", ReportSchema);
export default ReportModel;
