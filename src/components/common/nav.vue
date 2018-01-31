<style lang="less">
    @import url('./nav.less');
</style>
<template>
    <div id="nav">
        <div class="panel list-group" id="panel2">
            <div class="panel-group">
                <div class="panel panel-default text-left" v-for="nav in navArr"  @click="collapse(nav);">
                    <div class="panel-heading"> <i class="icon" :class="nav.icon"></i>
                        <a class="panel-title" >{{nav.name}}</a>
                    </div>
                    <div :id="nav.id" class="panel-collapse collapse" v-if="nav.sonList.length != 0">
                        <div class="panel-body" v-for="son in nav.sonList" @click="locater(son.locateName, $event);">{{son.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./nav.js"></script>