import mongoose, {Schema} from "mongoose";

export type Company = {
    _id: Schema.Types.ObjectId
    name: string;
    b_id: string;
    ub_id: string;
    logo : string;
    email: string;
    phoneNumber: string;
    password: string;
    address: string;
    numberofReportShow: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const companySchema = new Schema<Company>({
    name: { type: String, required: true },
    logo: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    b_id: { type: String, required: true },
    ub_id: { type: String, required: true },
    address: { type: String, required: true }, 
    password: { type: String, required: true },
    numberofReportShow: [{ type: Schema.Types.ObjectId, ref: "ReportShow" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, );
const CompanyModel = mongoose.model<Company>("Company", companySchema);
export default CompanyModel;