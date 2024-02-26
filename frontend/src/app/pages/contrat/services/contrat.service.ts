import { Injectable } from '@angular/core';
import {
  HateoasResourceOperation,
  HateoasResourceService,
  PagedResourceCollection
} from '@lagoshny/ngx-hateoas-client';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Contrat, ContratCreate } from './../model/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService extends HateoasResourceOperation<Contrat> {

  private apiURL = "http://localhost:8080";
  private _jsonURL = 'assets/data/contrat.json';

  private subject = new Subject<Contrat[]>();
  private contrats = Array<Contrat>();

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
    super(Contrat);
  }

  public getAllContrats(): Observable<PagedResourceCollection<Contrat>> {
    return this.resourceService.getPage(Contrat)
    .pipe ()
      /*.subscribe( (collection: PagedResourceCollection<Contrat>) => {
        const contrats: Array<Contrat> = collection.resources;
      })
      */
  }
  /**
    * Write code on Method
    *
    * @return response()
    */
  public find(id:string): Observable<Contrat> {
    console.log('find id  ' + id);
    return this.resourceService.getResource(Contrat, id).pipe();
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  public update(contrat: Contrat): Observable<Contrat> {

   console.log("update ContratService " + JSON.stringify(contrat));
    return this.resourceService.updateResource(contrat).pipe();
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  public create(contrat: ContratCreate): Observable<ContratCreate> {

    console.log("create ContratService " + JSON.stringify(contrat));

    return this.resourceService.createResource(ContratCreate, { body: contrat }).pipe();
  }


}
