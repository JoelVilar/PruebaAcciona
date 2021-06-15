<template>
    <div>
        <ProfileList :profiles = "profiles"/>
    </div>
</template>
<script>
import ProfileList from '../components/profiles/ProfileList.vue'
import * as ProfileService from '../controller/ProfileService.mjs'

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
        console.log(this.profiles)
    }
}
</script>