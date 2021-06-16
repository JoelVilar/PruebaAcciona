<template>
    <div>
        <h1>Profile list:</h1>
        <section>
            <md-button class="md-accent md-raised" @click="goTo()">GO TO FAV LISTS</md-button>
        </section>
        <ProfileList :profiles = "profiles"/>
    </div>
</template>
<script>
import ProfileList from '../components/profiles/ProfileList.vue'
import * as ProfileService from '../controller/service/ProfileService.mjs'

export default {
    name: 'Home',
    components:{
        ProfileList,
    },
    data(){
        return {
            profiles: [],
        }
    },
    async created() {
        this.profiles = await ProfileService.getProfiles()
    },
    methods: {
        goTo(){
            this.$router.push({ name: 'favs'})
        }
    },
}
</script>
<style scoped>
    section{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    h1{
        margin: 30px;
    }
</style>