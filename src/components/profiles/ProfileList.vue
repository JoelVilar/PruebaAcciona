<template>
    <div>
        <input type="text" v-model="name" placeholder="Filter by name">
        <input type="text" v-model="age" placeholder="Filter by age">
        <select name="gender" id="gender" v-model="gender">
            <option value="x">Filter by gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <thead>
            <tr class="tHead">
                    <td>Género</td>
                    <td>Nombre</td>
                    <td>Email</td>
                    <td>Nacionalidad</td>
                    <td>Fecha nacimiento</td>
                    <td>Fecha registro</td>
            </tr>
        </thead>
        <tbody>
            <tr :key="profile.id" v-for="profile in filteredProfiles">
                <ProfileItemList :profile = "profile"/>
            </tr>
        </tbody>
    </div>
</template>
<script>
import ProfileItemList from './ProfileItemList.vue'

export default {
    name: 'ProfileList',
    props: {
        profiles: Array,

    },
    components: {
        ProfileItemList,
    },
    data(){
        return {
            name : '',
            age: 0,
            gender: 'x',
        }
    },
    computed: {
        filteredProfiles: function () {
            return this.profiles
                        .filter(profile => 
                                    (profile.name.first.toLowerCase().match(this.name.toLowerCase()) || profile.name.last.toLowerCase().match(this.name.toLowerCase()))
                                    && profile.dob.age >= this.age
                                    && (profile.gender.length == this.gender.length || this.gender.match('x'))
                                )
        }
    },  
}
</script>
<style scoped>
    td{
        border-bottom: 5px solid green;
        margin: 50px;
    }
    input,
    select{
        padding: 5px;
        margin: 5px;
    }
</style>