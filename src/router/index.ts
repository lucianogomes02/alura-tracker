import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasAtividade from '../views/TarefasAtividade.vue'
import ProjetosAtividade from '../views/ProjetosAtividade.vue'
import FormularioProjetosAtividade from '../views/Projetos/FormularioProjetosAtividade.vue'

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
    {
        path: '/projetos/novo',
        name:'Novo Projetos',
        component: FormularioProjetosAtividade,
    },
    {
        path: '/projetos/:id',
        name:'Editar Projetos',
        component: FormularioProjetosAtividade,
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,  
})

export default roteador;