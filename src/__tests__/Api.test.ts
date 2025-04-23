import { useFullRemoveUser, useGetAllActiveUsers, useGetUser, usePostUser, useSoftRemoveUser, useUpdateUser } from "../composables/useFetch";
import { convertToApiUser, isActiveUser, isUser, type User } from "../types";

function rng(): number {
    return Math.round(Math.random() * 100000);
}

function compareId(data: any, id: number): boolean {
    console.log(data)
    return isUser(data) ? data.id === id : false;
}

function compareData(newData: Partial<User>, respData: any): boolean {
    console.log(respData);
    console.log(isUser(respData));
    if (!isUser(respData)) return false;
    const keysToCompare = Object.keys(newData);
    const compared = keysToCompare.every((item) => {
        return newData[item as keyof User] === respData[item as keyof User];
    })
    return compared;
}

describe('Api Post Tests', () => {
    it('Post de Multiples usuarios', async () => {
        for (let i = 0; i < 1; i++) {
            const newNumber = rng();
            const data: Partial<User> = {
                firstName: `John ${newNumber}`,
                lastName: 'Doe',
                email: `jdoe${newNumber}@email.com`
            }
            const resp = await usePostUser(data);
            expect(isUser(resp)).toBe(true);
        }
    });
});

describe('Api Get Tests', () => {
    it('Solo usuarios activos', async () => {
        const resp = await useGetAllActiveUsers();
        expect(resp.every(isActiveUser)).toBe(true);
    });

    it('Consulta Usuarios por ID', async () => {
        for (let i = 10; i <= 20; i++) {
            const resp = await useGetUser(i);
            expect(compareId(resp, i)).toBe(true);
        }
    });
});

describe('Api Update Tests', () => {
    it('Actualización correcta de Usuario', async () => {
        const newData: Partial<User> = {
            lastName: 'Yañez',
            email: `some${rng()}@email.com`
        }
        console.log(convertToApiUser(newData));
        const resp = await useUpdateUser(3, newData);
        expect(compareData(newData, resp)).toBe(true);
    });

    it('Correcto Borrado Lógico de Usuario', async () => {
        const resp = await useSoftRemoveUser(15);
        console.log(resp);
        expect(isUser(resp) && !isActiveUser(resp)).toBe(true);
    });
});

describe('Borrado permanente', () => {
    it('Borrado permanente por ID', async () => {
        const id: number = 20;

        const oldresp = await useGetUser(id);
        const compared = compareId(oldresp, id);
        await useFullRemoveUser(id)
        const newResp = await useGetUser(id);
        expect(compared && !isUser(newResp)).toBe(true);
    });

    it('Borrado permanente desde lista', async () => {
        const idsToRemove: number[] = [10, 12, 15, 13];
        for (const i of idsToRemove) {
            const oldresp = await useGetUser(i);
            const compared = compareId(oldresp, i);
            await useFullRemoveUser(i)
            const newResp = await useGetUser(i);
            expect(compared && !isUser(newResp)).toBe(true);
        }
    });
});