import { Alias } from "./alias";

export interface TemplateFormModel {
    firstName?: string;
    lastName?: string;
    address: {
        street?: string;
        city?: string;
        state?: number | "";
        zipcode?: number;
    }
    aliases: Alias[];


}