import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('contrats')
export class Contrat extends Resource {
    public id: number;
    public nom: string;
    public num_paje: string;
    public date_debut: string;
    public num_week: string;
    public num_hour: string;
    public num_day: string;
    public amount_hour: string;
}

@HateoasResource('contrats')
export class ContratCreate extends Resource {
    public nom: string;
    public num_paje: string;
    public date_debut: string;
    public num_week: string;
    public num_hour: string;
    public num_day: string;
    public amount_hour: string;
}
