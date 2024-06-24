import { HttpParams } from '@angular/common/http';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../environments/environment';
import { ResourceFilter } from './base-resource-types';
import { BaseDTO } from './base-dto';

export abstract class BaseResource {
    protected jsonApi: string = '';

    public bindJsonApi(): string {
        return this.jsonApi ? `${environment.apiUrl}/${this.jsonApi}` : environment.apiUrl;
    }

    public async getToken(): Promise<void> {
        await axios.get(`${environment.apiUrl}/sanctum/csrf-cookie`);
    }

    public get(filters?: ResourceFilter): Promise<any> {
        const url = this.bindJsonApi();

        const options: any = {};

        if (filters) {
            options.params = this.buildQueryParams(filters);
        }

        return axios.get(url, options).then((response) => response.data?.data?.map((item: any) => this.bindData(item)));
    }

    public find(id: number): Promise<any> {
        const url = this.bindJsonApi();

        return axios.get(`${url}/${id}`).then((response) => this.bindData(response.data?.data));
    }

    public post(data: any, endpoint?: string): Promise<AxiosResponse> {
        let url = this.bindJsonApi();

        if (endpoint) {
            url = `${url}/${endpoint}`;
        }

        return axios.post(url, data);
    }

    public put(data: any, id ?: number, endpoint ?: string): Promise < AxiosResponse > {
        let url = this.bindJsonApi();

        url = endpoint ? `${url}/${endpoint}` : url;

        if(id) {
            url = `${url}/${id}`;
        }

        if(endpoint) {
            url = `${url}/${endpoint}`;
        }

        return axios.put(url, data);
    }

    public delete (id: number): Promise < AxiosResponse > {
        const url = this.bindJsonApi();

        return axios.delete(`${url}/${id}`)
    }

    public deleteWithConfirmation(id: number): void {
        const response = confirm('Deseja realmente excluir este registro?');

        if(response) {
            this.delete(id);
        }
    }

    public save(data: any): Promise < AxiosResponse > {
        return data?.id ? this.put(data, data.id) : this.post(data);
    }

    private buildQueryParams(filters: ResourceFilter | null): HttpParams {
        let params = new HttpParams();

        if (!filters) {
            return params;
        }

        Object.keys(filters)?.forEach((key) => {
            if (filters[key]) {
                params = params.append(key, filters[key])
            }
        });

        return params;
    }

    public abstract bindData(data: any): BaseDTO
}
