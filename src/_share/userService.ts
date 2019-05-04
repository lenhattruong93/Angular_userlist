import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Injectable} from "@angular/core";
@Injectable()
export class UserService{
    private http:Http;
    constructor(http:Http){
        this.http=http;
        
    }
    public getUsers():Promise<any>{
        let def : Promise<any>=new Promise((resolve:any, reject:any)=>{
            let url : string ="/rest/api/users";
            this.http.get(url)
            .map(respone => respone.json())
            .subscribe((users:any)=>{
                resolve(users);
            });
        });
        return def;
    }
}