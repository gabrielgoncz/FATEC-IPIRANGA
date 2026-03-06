import { Routes } from '@angular/router';
import { Contato } from './contato/contato';
import { Login } from './login/login';
import { Vitrine } from './vitrine/vitrine';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
    {path:"cadastro", component:Cadastro},
    {path:"fale", component:Contato},
    {path:"login", component:Login},
    {path:"vitrine", component:Vitrine},
    {path:"", component:Vitrine}
];
