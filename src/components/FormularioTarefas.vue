<template>
    <div class="box">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para iniciar uma nova tarefa">
                <input 
                  class="input"
                  type="text"
                  placeholder="Qual tarefa você deseja iniciar?"
                  v-model="descricao" />
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <TemporizadorTarefas @aoFinalizarTarefa="salvarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import IProjeto from '@/interfaces/IProjeto';
import TemporizadorTarefas from './TemporizadorTarefas.vue';

export default defineComponent({
    name: 'FormularioTarefas',
    components: { TemporizadorTarefas },
    emits: ['aoSalvarTarefa'],
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    computed: {
        projetos(): IProjeto[] {
            const store = useStore(key)
            return store.state.projetos as IProjeto[]
        }
    },
    methods: {
        salvarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })

            this.descricao = ''
        }
    }
})
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>