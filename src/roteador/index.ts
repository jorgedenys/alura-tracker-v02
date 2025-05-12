import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasView from "@/views/TarefasView.vue";
import ProjetosView from "@/views/ProjetosView.vue"; 
import FormularioProjetosView from "@/views/projetos/FormularioProjetosView.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: TarefasView
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: ProjetosView
    },
    {
        path: '/projetos/novo',
        name: 'Novo Projeto',
        component: FormularioProjetosView,
        props: true
    },
    {
        path: '/projetos/:id',
        name: 'Editar Projeto',
        component: FormularioProjetosView,
        props: true
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;