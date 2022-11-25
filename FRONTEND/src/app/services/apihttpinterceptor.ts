import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";

@Injectable()


export class ApiHttpInterceptor implements HttpInterceptor {

    jwtToken: String = "";

    constructor(private route: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (this.jwtToken != "") {
            request = request.clone({
                setHeaders: {Authorization: `Bearer ${this.jwtToken}`, 'Content-Type': 'application/json'}
             });
        }

        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    let tab: Array<String>;
                    let enteteAuthorization = event.headers.get("authorization");
                    if (enteteAuthorization != null) {
    
                        tab = enteteAuthorization.split(/Bearer\s+(.*)$/i);
                        if (tab.length > 1) {
    
                            this.jwtToken = tab[1];
                        }
                    }
                }
            }
        ));
    }
}