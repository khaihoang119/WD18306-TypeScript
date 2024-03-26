import { CompanyModel } from "../model/conpany.model";

export const LocalStorageKey = {
    ID: 'block_id',
    COMPANY: 'company'
};

export class LocalStorageHelper {
    public static getID() {
        return JSON.parse(localStorage.getItem(LocalStorageKey.ID) ?? '');
    }

    public static getCompany(): CompanyModel {
        return JSON.parse(localStorage.getItem(LocalStorageKey.COMPANY) ?? '');
    }
}