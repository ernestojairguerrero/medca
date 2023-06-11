import { HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { InteractionsService } from "./interactions.service";

@Injectable({
  providedIn: 'root'
})
export class GetServerError {

  private interactionSvc = inject(InteractionsService);

  getServerError(error: HttpErrorResponse): string {
    switch (error.status) {
      case 400: { return `Bad Request: ${error.message}`; }
      case 401: { return `Unauthorized: ${error.message}`; }
      case 403: { return `Access Denied: ${error.message}`; }
      case 404: { return `Not Found: ${error.message}`; }
      case 500: { return `Internal Server Error: ${error.message}`; }
      default: { return `Unknown Server Error: ${error.message}`; }
    }
  }

  showError(errorMsg: string): any {
    return this.interactionSvc.presentToast(`Se ha presentado un error: ${errorMsg}`, 1000, 'danger');
  }

  extractError(error: HttpErrorResponse): any {
    if (error.error && typeof error.error === 'object' && error.error.msg) {
      return error.error.msg;
    } else {
    return this.interactionSvc.presentToast('Se ha presentado un en el servidor: ', 1000, 'danger');

    }
  }

}