<style lang="less">
    @import url('./header.less');
</style>
<template>
    <div class="navbar navbar-inverse navbar-fixed-top" id="header">
        <div class="container-fluid">
            <!--这个不要动-->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                    aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
                <a class="navbar-brand" href="#">我的LOGO</a>
            </div>
            <!--这里是真header-->
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script src="./header.js"></script>