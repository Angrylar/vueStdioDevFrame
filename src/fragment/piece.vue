
<template>
    <div>
        <h1>get message: {{innerMsg}}</h1>
        <h2>{{counter}}</h2>
        <h3>{{msg}}</h3>
        <input type="text" v-model="msg">
        <button @click="emitIt()">向上传</button>
        <input type="button" @click="addOne()" value="加一"/>
    </div>
</template>

<script>
export default {
    name: 'inp',
    data () {
        return {
            counter: 0,
            msg: '空'
        }
    },
    props: ['innerMsg'],
    methods: {
        addOne: function () {
            console.log('plus one')
            this.counter += 1;
            this.$emit('increment', this.counter);
        },
        emitIt: function(){
            this.$emit('msg', this.msg);
        }
    },
}
</script>