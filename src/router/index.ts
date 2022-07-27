import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasAtividade from '../views/TarefasAtividade.vue'
import ProjetosAtividade from '../views/ProjetosAtividade.vue'
import FormularioProjetosAtividade from '../views/Projetos/FormularioProjetosAtividade.vue'
import ListaProjetos from '../views/Projetos/ListaProjetos.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name:'Tarefas',
        component: TarefasAtividade,
    },
    {
        path: '/projetos',
        component: ProjetosAtividade,
        children: [
            {
                path: '',
                name:'Projetos',
                component: ListaProjetos,
            },
            {
                path: 'novo',
                name:'Novo Projetos',
                component: FormularioProjetosAtividade,
            },
            {
                path: ':id',
                name:'Editar Projetos',
                component: FormularioProjetosAtividade,
                props: true
            },
        ]
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,  
})

export default roteador;