import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

export const appRoute:Routes = [
    {
        path: '',
        component: HomeComponent
    }
];