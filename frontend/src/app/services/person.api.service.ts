import { Injectable } from '@angular/core';
import {
  HateoasResourceOperation,
  HateoasResourceService,
  PagedResourceCollection
} from '@lagoshny/ngx-hateoas-client';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Person, PersonCreate } from '../interfaces/persons.interface';
@Injectable({
  providedIn: 'root'
})
export class PersonApiService  extends HateoasResourceOperation<Person> {

  private apiURL = "http://localhost:3010";
  private _jsonURL = 'assets/data/person.json';

  private subject = new Subject<Person[]>();
  private persons = Array<Person>();

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic dXNlcjo4MDZmNWMwZS0xOTU3LTQwYzktYTk2YS1iNDExNDBlZDg0Y2I='
    })
  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/

  constructor(public resourceService: HateoasResourceService) {
    super(Person);
  }

  public getAllPersons(): Observable<PagedResourceCollection<Person>> {
    return this.resourceService.getPage(Person)
    .pipe ()
      /*.subscribe( (collection: PagedResourceCollection<Account>) => {
        const accounts: Array<Account> = collection.resources;
      })*/
  }
  /**
    * Write code on Method
    *
    * @return response()
    */
  public find(id:string): Observable<Person> {
    console.log('find id  ' + id);
    return this.resourceService.getResource(Person, id).pipe();
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  public update(person: Person): Observable<Person> {

   console.log("update PersonService " + JSON.stringify(person));
    return this.resourceService.updateResource(person).pipe();
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  public create(person: PersonCreate): Observable<PersonCreate> {

    console.log("create PersonService " + JSON.stringify(person));

    return this.resourceService.createResource(PersonCreate, { body: person }).pipe();
  }

}
