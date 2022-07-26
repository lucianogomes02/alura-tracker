import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasAtividade from '../views/TarefasAtividade.vue'

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name:'Tarefas',
    component: TarefasAtividade,

}]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,  
})

export default roteador;