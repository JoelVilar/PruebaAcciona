<template>
    <div>
        
        <md-table>
            <md-table-toolbar>
                <md-field class="md-toolbar-section-start">
                    <label>Filter by name</label>
                    <md-input type="text" v-model="name"></md-input>
                </md-field>
                <md-field class="md-toolbar-section-start">
                    <label>Filter by age</label>
                    <md-input dividerColor="accent" type="text" v-model="age"></md-input>
                </md-field>
                <md-field class="md-toolbar-section-end">
                    <md-select v-model="gender" name="gender" id="gender">
                        <md-option value="x">Filter by gender</md-option>
                        <md-option value="male">Male</md-option>
                        <md-option value="female">Female</md-option>
                    </md-select>
                </md-field>
            </md-table-toolbar>
            <md-table-row>
                <md-table-head >Gender</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Email</md-table-head>
                <md-table-head>Nationality</md-table-head>
                <md-table-head>Date of birth</md-table-head>
                <md-table-head>Registered</md-table-head>
            </md-table-row>

            <md-table-row :key="profile.login.uuid" v-for="profile in filteredProfiles">
                <md-table-cell>{{profile.name.title}}</md-table-cell>
                <md-table-cell>{{`${profile.name.first} ${profile.name.last}`}}</md-table-cell>
                <md-table-cell>{{profile.email}}</md-table-cell>
                <md-table-cell>{{profile.nat}}</md-table-cell>
                <md-table-cell>{{dateFormat(profile.dob.date)}}</md-table-cell>
                <md-table-cell>{{dateFormat(profile.registered.date)}}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>
<script>
import moment from 'moment'

export default {
    name: 'ProfileList',
    props: {
        profiles: Array,
    },
    data(){
        return {
            name : '',
            age: '',
            gender: 'x',
        }
    },
    methods:{
        dateFormat(value) {
            return moment(value).format('dd/MM/yyyy')
        },
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
    th{
        border-bottom: 2px ridge #ff0000;
    }
    tr{
        transition: 150ms;
    }
    tr:hover{
        border-left: 1px ridge #ff0000;
        color: #ff0000;
    }
    input,
    select{
        padding: 5px;
        margin: 5px;
    }
</style>