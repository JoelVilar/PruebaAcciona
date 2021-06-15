<template>
    <div>
        <td>
            <span>{{profile.gender}}</span>
        </td>
        <td>
            <span>{{`${profile.name.first} ${profile.name.last}`}}</span>
        </td>
        <td>
            <span>{{profile.email}}</span>
        </td>
        <td>
            <span>{{profile.nat}}</span>
        </td>
        <td>
            <span>{{dateFormat(profile.dob.date)}}</span>
        </td>
        <td>
            <span>{{dateFormat(profile.registered.date) }}</span>
        </td>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    name: 'ProfileItemList',
    props: {
        profile: Object,
    },
    methods:{
        dateFormat(value) {
            return moment(value).format('dd/MM/yyyy')
        },
    },
}
</script>
<style scoped>
td{
    padding: 10px;
}
</style>