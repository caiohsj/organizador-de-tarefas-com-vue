import http from "./config";

export default {
    lista:()=> {
        return http.get('/tarefas/lista')
    },
    criar: (tarefa) => {
        const qs = require('qs');
        return http.post('/tarefas/adiciona', qs.stringify(tarefa))
    },
    deletar: (id) => {
        return http.delete('/tarefas/'+id+'/remove')
    },
    buscarPorTitulo: (tarefa) => {
        return http.get('tarefas/busca/titulo/'+tarefa.titulo)
    }
}