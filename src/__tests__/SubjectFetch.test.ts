import { useFullRemoveSubject, useGetAllActiveSubjects, useGetSubject, usePostSubject, useSoftRemoveSubject, useUpdateSubject } from "../composables/useSubjectFetch";
import { convertToApiSubject, isActiveSubject, isSubject, type Subject } from "../types";

function rng(): number {
    return Math.round(Math.random() * 100000);
}

function compareId(data: any, id: number): boolean {
    console.log(data)
    return isSubject(data) ? data.id === id : false;
}

function compareData(newData: Partial<Subject>, respData: any): boolean {
    console.log(respData);
    console.log(isSubject(respData));
    if (!isSubject(respData)) return false;
    const keysToCompare = Object.keys(newData);
    const compared = keysToCompare.every((item) => {
        return newData[item as keyof Subject] === respData[item as keyof Subject];
    })
    return compared;
}

describe('Test Post Asignaturas', () => {
    it('Post de Multiples Asignaturas', async () => {
        for (let i = 0; i < 30; i++) {
            const newNumber = rng();
            const data: Partial<Subject> = {
                name: `Subject #${newNumber}`,
            }
            console.log(data, convertToApiSubject(data))
            const resp = await usePostSubject(data);
            console.log(resp);
            expect(isSubject(resp)).toBe(true);
        }
    });
});

describe('Test Get Asignaturas', () => {
    it('Solo asignaturas activas', async () => {
        const resp = await useGetAllActiveSubjects();
        expect(resp.every(isActiveSubject)).toBe(true);
    });

    it('Consulta asignaturas por ID', async () => {
        for (let i = 31; i <= 35; i++) {
            const resp = await useGetSubject(i);
            expect(compareId(resp, i)).toBe(true);
        }
    });
});

describe('Test patch Asignaturas', () => {
    it('Actualización correcta de asignatura', async () => {
        const newData: Partial<Subject> = {
            name: `Updated to ${rng()} Subject`
        }
        console.log(newData);
        const resp = await useUpdateSubject(31, newData);
        expect(compareData(newData, resp)).toBe(true);
    });

    it('Correcto Borrado Lógico de asignatura', async () => {
        const id: number = 6;
        const oldResp = await useGetSubject(id);
        const resp = await useSoftRemoveSubject(id);
        console.log(resp);
        expect((isSubject(oldResp) && isActiveSubject(oldResp)) && (isSubject(resp) && !isActiveSubject(resp))).toBe(true);
    });
});

describe('Test delete asignaturas', () => {
    it('Borrado permanente de asignatura por ID', async () => {
        const id: number = 32;

        const oldresp = await useGetSubject(id);
        const compared = compareId(oldresp, id);
        await useFullRemoveSubject(id)
        const newResp = await useGetSubject(id);
        expect(compared && !isSubject(newResp)).toBe(true);
    });

    it('Borrado permanente de asignaturas desde lista', async () => {
        const idsToRemove: number[] = [10, 12, 15, 13];
        for (const i of idsToRemove) {
            const oldresp = await useGetSubject(i);
            const compared = compareId(oldresp, i);
            await useFullRemoveSubject(i)
            const newResp = await useGetSubject(i);
            expect(compared && !isSubject(newResp)).toBe(true);
        }
    });
});