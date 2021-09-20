import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { AccountService } from "../account/shared/account.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = this.accountService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if (token && !this.accountService.isTokenExpired(token)) {
      // O request é imutável, ou seja, não é possivel mudar nada
      // Faço o clone para conseguir mudar as propriedades
      // Passo o token de autenticação no header
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    // retorno o request com o erro tratado
    return next.handle(request)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erro de client-side ou de rede
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // Erro retornado pelo backend
      console.error(
        `Código do erro ${error.status}` +
        `Erro: ${JSON.stringify(error.error)}`);
    }
    return throwError('Ocorreu um erro, tente novamente');
  }
}