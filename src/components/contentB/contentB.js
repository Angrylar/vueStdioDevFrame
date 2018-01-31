export default {
    name: 'contentB',
    data() {
        return {
            person: {},
            sexArr: [
                {
                    sex: 'Male',
                    value: '1'
                }, {
                    sex: 'Female',
                    value: '2'
                }
            ],
            dictSex: {
                1: 'Male',
                2: 'Female'
            },
            nameList: this.$store.state.moduleA.personList,

        }
    },
    computed: {

    },
    mounted: function () {
        // this.$axios({
        //     methods: "POST",
        //     url: '/lls',
        //     param: {
        //         c: '123'
        //     },
        // }).then(function (res) {

        // }).catch(function (err) {

        // })
        console.log(this)
    },
    methods: {
        add: function () {
            console.log(this)
            this.$store.commit('setCurPerson', this.person);
            this.$store.commit('setPersonList', this.person);
            console.log(this.$store.state.moduleA.personList);
            return false;
        },
        edit: function (id) {
            console.log(id)
        },
        delete: function (id) {
            console.log(id)
        },
    }
}