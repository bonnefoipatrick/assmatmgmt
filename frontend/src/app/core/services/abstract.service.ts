
@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T> {

  private apiURL = "http://localhost:8080";

  private subject = new Subject<AbstractEntity[]>();
  private entities = Array<AbstractEntity>();

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
}
