<style lang="less">
    @import url('./common.less');
</style>
<template>
    <div id="common">
        <div class="header">
            <app-header></app-header>
        </div>
        <div class="main">
            <div class="nav container">
                <app-nav></app-nav>
            </div>
            <div class="content container-fluid scroll-show">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import appHeader from '../../components/common/header.vue';
    import appNav from '../../components/common/nav.vue';
    
    export default {
        name: 'layout',
        components: { appHeader, appNav },
        data () {
            return {

            }
        }
    }
</script>