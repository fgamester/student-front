export type Subject = {
    id: number;
    name: string;
    description?: string;
    active: boolean;
}

export function isSubject(obj: any): obj is Subject {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;

    const objKeys = Object.keys(obj)
    const requiredProperties = ['id', 'name', 'active'];
    const optionalProperties = ['description'];

    const hasRequiredProperties = requiredProperties.every((item) => objKeys.includes(item));
    const hasOnlyAllowedProperties = objKeys.every((item) => requiredProperties.includes(item) || optionalProperties.includes(item));

    if (!hasRequiredProperties || !hasOnlyAllowedProperties) return false;

    if (typeof obj.id !== 'number') return false;
    if (typeof obj.name !== 'string') return false;
    if (typeof obj.active !== 'boolean') return false;

    if ('description' in obj && typeof obj.description !== 'string') return false;

    return true;
}

export function isActiveSubject(subject: Subject): boolean {
    return subject.active;
}

export function isValidSubjectArray(list: any): list is Subject[] {
    return Array.isArray(list) && list.every(isSubject);
}

export function isSubjectArray(list: any): list is Subject[] {
    return Array.isArray(list) && list.length > 0 && list.every(isSubject)
}

export function convertToLocalSubject(obj: any): Subject {
    const newObj: Subject = {
        id: obj.id,
        name: obj.name,
        active: obj.active
    };

    if (typeof obj.description === 'string') newObj.description = obj.description;

    return newObj;
}

export function convertToApiSubject(obj: Partial<Subject>, allowEmptyOptional: boolean = false) {
    return {
        ...(typeof obj.name === 'string' && { name: obj.name }),
        ...(typeof obj.description === 'string' && (obj.description.length > 0 || allowEmptyOptional) && { description: obj.description }),
    }
}
