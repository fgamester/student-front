import axiosApi from "../api/axios";
import { convertToApiSubject, convertToLocalSubject, type Subject } from "../types/Subject";

const path = 'subjects';

export async function usePostSubject(data: Partial<Subject>): Promise<Subject | null> {
    try {
        const resp = await axiosApi.post(path, convertToApiSubject(data));
        const dataResp = resp.data;
        return convertToLocalSubject(dataResp);
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useGetSubject(id: number): Promise<Subject | null> {
    try {
        const resp = await axiosApi.get(`${path}/${id}`);
        return convertToLocalSubject(resp.data);
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useGetAllSubjects(): Promise<Subject[]> {
    try {
        const resp = await axiosApi.get(path);
        const dataResp = resp.data;
        return Array.isArray(dataResp) ? dataResp.map(convertToLocalSubject) : [];
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useGetAllActiveSubjects(): Promise<Subject[]> {
    try {
        const resp = await axiosApi.get(`${path}/active`);
        const dataResp = resp.data;
        return Array.isArray(dataResp) ? dataResp.map(convertToLocalSubject) : [];
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useUpdateSubject(id: number, data: Partial<Subject>): Promise<Subject | null> {
    try {
        const resp = await axiosApi.patch(`${path}/${id}`, convertToApiSubject(data));
        return convertToLocalSubject(resp.data);
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useSoftRemoveSubject(id: number): Promise<Subject | null> {
    try {
        const resp = await axiosApi.patch(`${path}/sremove/${id}`);
        return convertToLocalSubject(resp.data);
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useFullRemoveSubject(id: number): Promise<void> {
    try {
        await axiosApi.delete(`${path}/${id}`)
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

