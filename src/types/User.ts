export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    description?: string;
    phoneNumber?: string;
    address?: string;
    active: boolean;
}

export function isUser(obj: any): obj is User {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;

    const objKeys = Object.keys(obj)
    const requiredProperties = ['id', 'firstName', 'lastName', 'email', 'active'];
    const optionalProperties = ['description', 'phoneNumber', 'address'];

    const hasRequiredProperties = requiredProperties.every((item) => objKeys.includes(item));
    const hasOnlyAllowedProperties = objKeys.every((item) => requiredProperties.includes(item) || optionalProperties.includes(item));

    if (!hasRequiredProperties || !hasOnlyAllowedProperties) return false;

    if (typeof obj.id !== 'number') return false;
    if (typeof obj.firstName !== 'string') return false;
    if (typeof obj.lastName !== 'string') return false;
    if (typeof obj.email !== 'string') return false;
    if (typeof obj.active !== 'boolean') return false;

    if ('description' in obj && typeof obj.description !== 'string') return false;
    if ('phoneNumber' in obj && typeof obj.phoneNumber !== 'string') return false;
    if ('address' in obj && typeof obj.address !== 'string') return false;

    return true;
}

export function isActiveUser(user: User): boolean {
    return user.active;
}

export function isValidUserArray(list: any): list is User[] {
    return Array.isArray(list) && list.every(isUser);
}

export function isUserArray(list: any): list is User[] {
    return Array.isArray(list) && list.length > 0 && list.every(isUser)
}

export function convertToLocalUser(obj: any): User {
    const newObj: User = {
        id: obj.id,
        firstName: obj.first_name,
        lastName: obj.last_name,
        email: obj.email,
        active: obj.active
    };

    if (typeof obj.description === 'string') newObj.description = obj.description;
    if (typeof obj.phone_number === 'string') newObj.phoneNumber = obj.phone_number;
    if (typeof obj.address === 'string') newObj.address = obj.address;

    return newObj;
}

export function convertToApiUser(obj: Partial<User>) {
    return {
        ...(typeof obj.firstName === 'string' && { first_name: obj.firstName }),
        ...(typeof obj.lastName === 'string' && { last_name: obj.lastName }),
        ...(typeof obj.email === 'string' && { email: obj.email }),
        ...(typeof obj.description === 'string' && { description: obj.description }),
        ...(typeof obj.phoneNumber === 'string' && { phone_number: obj.phoneNumber }),
        ...(typeof obj.address === 'string' && { address: obj.address }),
    }
}