import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('accounts')
export class Person extends Resource {
  public id: String;
  public first_name: String;
  public last_name: String;
  public phone: String;
  public mobile: String;
  public no_ss: String;
}

@HateoasResource('accounts')
export class PersonCreate extends Resource {
  public first_name: String;
  public last_name: String;
  public phone: String;
  public mobile: String;
  public no_ss: String;
}
