import mongoose, { Schema } from "mongoose";

export type Location = {
  type: "Point";
  coordinates: [number, number];
};

export type ReportShow = {
  _id: Schema.Types.ObjectId;
  imageUrl : string;
  location: Location;
  description: string;
  countLike : number;
  createdAt: Date;
  updatedAt: Date;
};

const ReportShowSchema = new Schema<ReportShow>({
    imageUrl: { type: String, required: true },
    location: {
      type: { type: String, enum: ["Point"], required: true },
      coordinates: { type: [Number], required: true },
    },
    countLike: { type: Number, default: 0 },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})    


const ReportShowModel = mongoose.model<ReportShow>("ReportShow", ReportShowSchema);
export default ReportShowModel;
