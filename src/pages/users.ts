import { Component, Injectable } from "@angular/core";
import { UserService } from "../_share/userService";
@Component({
    templateUrl: 'src/pages/users.html'
})


export class Users {
    public users: Array<any> = [];
    constructor(userservice: UserService) {
        let self = this;
        userservice.getUsers().then((users: any) => {
            self.users = users;
        });

    }










    // public onAddClicked() {
    // }
    // public onEditClicked() {

    // }

}