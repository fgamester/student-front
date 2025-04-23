import { convertToLocalUser, isUser, type User } from "../types";

describe('Tests para validación de datos de Usuario', () => {
    it('Test 1', () => {
        const obj: Partial<User> = {
            id: 3,
            lastName: 'John'
        }
        expect(isUser(obj)).toBe(false);
    });
});

describe('Tests para conversión de API User a Local User', () => {
    it('Test 1', () => {
        const obj = {
            "id": 3,
            "first_name": "Franco",
            "last_name": "Alvarez",
            "email": "email.email@hotmail.es",
            "description": null,
            "phone_number": null,
            "address": null,
            "active": true
        }
        const newObj = convertToLocalUser(obj);
        expect(isUser(newObj)).toBe(true);
    });
});