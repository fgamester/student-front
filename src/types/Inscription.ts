import { isSubjectArray, type Subject } from "./Subject";

export type Inscription = {
    id: number;
    subjects: Subject[]
}

export function isInscription(obj: any): obj is Inscription {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;

    if (typeof obj.id !== 'number') return false;
    if (!isSubjectArray(obj.subject)) return false;

    return true;
}

export function filterInscriptionArray(list: any): Inscription[] {
    return Array.isArray(list) ? list.filter(isInscription) : [];
}