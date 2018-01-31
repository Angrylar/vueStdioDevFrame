<template>
    <div id="contentA">
        <h1>{{title}}</h1>
        <p>{{total}}</p>
        
        <inp v-bind:innerMsg = "innerCP" @increment="addOne" @msg="emiter"></inp>

        <input type="text" v-model="inner">
        <button @click="sendMsg()">innerBtn</button>
    </div>
</template>

<script src="./contentA.js"></script>