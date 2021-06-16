<template>
    <div>
        <section>
            <md-button class="md-accent md-raised" @click="goTo()">GO TO HOME</md-button>
        </section>
        <md-field class="md-toolbar-section-end">
            <label for="">Listas de favoritos</label>
            <md-select v-model="choosenList" name="favs" id="favs">
                <md-option :key="list.name" v-for="list in favList" :value="list.data">{{list.name}}</md-option>
            </md-select>
        </md-field>
        <div :v-if="choosenList.lenght>0">
            <ProfileList :profiles = "choosenList" />
        </div>
        <md-button class="md-primary md-raised" @click="downloadCSV()">DOWNLOAD CSV</md-button>
    </div>
</template>
<script>
import ProfileList from '../components/profiles/ProfileList.vue'
import * as profileService from '../controller/service/ProfileService.mjs'

export default {
    name: 'Fav',
    components:{
        ProfileList,
    },
    data(){
        return {
            favList: Array,
            choosenList: Array,
            listName : ''
        }
    },
    async created(){
        this.favList = await profileService.getFavList()
    },
    methods:{
        downloadCSV(){
            let csvContent = "data:text/csv;charset=utf-8,";

            this.choosenList.forEach( profile => {
                csvContent += `${profile.gender};`
                csvContent += `${profile.name.first};`
                csvContent += `${profile.name.last};`
                csvContent += `${profile.email};`
                csvContent += `${profile.nat};`
                csvContent += `${profile.dob.date};`
                csvContent += `${profile.registered.date};`
                csvContent += "\r\n"
            })
            
            let encodedUri = encodeURI(csvContent);
            let link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "my_data.csv");
            link.click();
        },
        goTo(){
            this.$router.push({ name: 'Home'})
        },
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
    section{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
</style>