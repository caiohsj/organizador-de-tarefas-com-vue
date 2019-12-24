<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" id="menu">
            <b-navbar-brand href="/">Organizador de Tarefas</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/tarefas/adiciona">Adicionar</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import {BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem} from 'bootstrap-vue'
    export default {
        name: "NavBar",
        components: {
            BNavbar,
            BNavbarBrand,
            BNavbarToggle,
            BCollapse,
            BNavbarNav,
            BNavItem
        }
    }
</script>

<style scoped>
#menu {
    padding: 30px;
    margin-bottom: 20px;
}
#icone-adicionar {
    color: white;
}
</style>