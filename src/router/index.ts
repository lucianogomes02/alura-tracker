import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasAtividade from '../views/TarefasAtividade.vue'
import ProjetosAtividade from '../views/ProjetosAtividade.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name:'Tarefas',
        component: TarefasAtividade,
    },
    {
        path: '/projetos',
        name:'Projetos',
        component: ProjetosAtividade,
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,  
})

export default roteador;