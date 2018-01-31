import inp from './../../fragment/piece.vue';
export default {
    name: 'contentA',
    components: { inp },
    data() {
        return {
            total: 0,
            title: 'init',
            inner: 'empty',
            innerCP: 'unknown'
        }
    },
    prop: {},
    methods: {
        addOne: function (arg) {
            this.total = arg;
        },
        emiter: function (arg) {
            this.title = arg;
        },
        sendMsg: function () {
            this.innerCP = this.inner;
        }
    }
}