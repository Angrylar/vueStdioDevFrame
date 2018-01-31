<style lang="less">
    @import url('./contentB.less');
</style>
<template>
    <div id="contentB">
        <div>
            <p>contentB</p>
            <div class="panel panel-primary">
                <div class="panel-heading">vuex单项数据流操作</div>
                    <div class="panel-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">name:</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name" v-model="person.name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">sex:</label>
                                <select class="form-control" v-model="person.sex">
                                    <option selected disabled>secret</option>
                                    <option v-for="obj in sexArr" :value="obj.value">{{obj.sex}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">age:</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Age" v-model="person.age">
                            </div>
                            <button class="btn btn-default" @click="add()">Add</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="panel panel-primary">
                <div class="panel-heading">vuex数据增加</div>
                    <div class="panel-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>No.</t>
                                    <th>姓名</th>
                                    <th>性别</th>
                                    <th>年龄</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(obj, index) in nameList">
                                    <td>{{index+1}}</td>
                                    <td>{{obj.name}}</td>
                                    <td>{{dictSex[obj.sex]}}</td>
                                    <td>{{obj.age}}</td>
                                    <td>
                                        <a>修改</a>
                                        <a>删除</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./contentB.js">
    
</script>