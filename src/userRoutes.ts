import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Users } from "./pages/users";
import { UserService } from "./_share/userService";
import { Http, HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
let routes: Routes = [
    { path : 'users', component : Users}
];
@NgModule({
    imports: [RouterModule.forRoot(routes),HttpModule,CommonModule],
    exports: [RouterModule],
    declarations  : [Users],
    providers : [UserService]
})
export class UserRoutes { }