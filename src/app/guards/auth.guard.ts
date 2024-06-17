import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    public canActivate(): boolean {
        if (!document.cookie?.includes('XSRF-TOKEN')) {
            window.location.href = '/login';

            return false;
        }

        return true;
    }
}
