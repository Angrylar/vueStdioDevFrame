export default {
    name: 'app-nav',
    data() {
        return {
            navArr: [
                {
                    name: '组件库',
                    icon: 'glyphicon glyphicon-th',
                    id: 'accountManager',
                    sonList: [{
                        locateName: '/contentA',
                        name: '组件A',
                    }, {
                        locateName: '/contentB',
                        name: '组件B',

                    }, {
                        locateName: '/contentC',
                        name: '组件C',
                    }]
                }, {
                    name: '组件库A',
                    icon: 'glyphicon glyphicon-eye-open',
                    id: 'contentManager',
                    sonList: [{
                        locateName: '/contentA',
                        name: '组件A'
                    }, {
                        locateName: '/contentB',
                        name: '组件B'
                    }, {
                        locateName: '/contentC',
                        name: '组件C'
                    }, {
                        locateName: '/d',
                        name: '组件D'
                    }, {
                        locateName: '/d/dd',
                        name: '组件dd',
                    }, {
                        locateName: '/d/hello',
                        name: '组件dH',
                    }]

                }, {
                    name: '组件库B',
                    icon: 'glyphicon glyphicon-picture',
                    id: 'adManager',
                    sonList: [{
                        locateName: '/contentB',
                        name: '组件B'
                    }, {
                        locateName: '/hello',
                        name: '欢迎位'
                    }]

                }, {
                    name: '组件库C',
                    icon: 'glyphicon glyphicon-briefcase',
                    id: 'msgManager',
                    sonList: [{
                        locateName: '/componentE/12345',
                        name: '动态地址12345',
                    }, {
                        locateName: '/componentE/aaa',
                        name: '动态地址aaa',
                    }]

                },
            ]
        }
    },
    methods: {
        locater: function (arg, ev) {
            ev.stopPropagation();
            this.$router.push({ path: `${arg}` })
            console.log(this.$router.history.current.params.id)
        },
        collapse: function (arg) {
            if (arg.sonList.length == 0) {
                // $state.go('admin.'+arg.id);
                console.log('cool')
            } else {
                // 普通菜单模式
                // $('#' + arg.id).collapse('toggle');

                // 手风琴模式
                $('.collapse').collapse('hide');
                $('#' + arg.id).collapse('toggle');
            }
        }
    }
}