import axiosApi from "../api/axios";
import { convertToApiUser, convertToLocalUser, type User } from "../types";

const path = 'students';

export async function usePostUser(data: Partial<User>): Promise<User | null> {
    try {
        const resp = await axiosApi.post(path, convertToApiUser(data));
        const dataResp = resp.data;
        return convertToLocalUser(dataResp);
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useGetUser(id: number): Promise<User | null> {
    try {
        const resp = await axiosApi.get(`${path}/${id}`);
        return convertToLocalUser(resp.data);
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useGetAllUsers(): Promise<User[]> {
    try {
        const resp = await axiosApi.get(path);
        const dataResp = resp.data;
        return Array.isArray(dataResp) ? dataResp.map(convertToLocalUser) : [];
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useGetAllActiveUsers(): Promise<User[]> {
    try {
        const resp = await axiosApi.get(`${path}/active`);
        const dataResp = resp.data;
        return Array.isArray(dataResp) ? dataResp.map(convertToLocalUser) : [];
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useUpdateUser(id: number, data: Partial<User>): Promise<User | null> {
    try {
        const resp = await axiosApi.patch(`${path}/${id}`, convertToApiUser(data));
        return convertToLocalUser(resp.data);
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useSoftRemoveUser(id: number): Promise<User | null> {
    try {
        const resp = await axiosApi.patch(`${path}/sremove/${id}`);
        return convertToLocalUser(resp.data);
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

export async function useFullRemoveUser(id: number): Promise<void> {
    try {
        await axiosApi.delete(`${path}/${id}`)
    } catch (error) {
        console.error('Error en la petición', error)
        throw error;
    }
}

