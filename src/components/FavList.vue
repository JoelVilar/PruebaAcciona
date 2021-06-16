<template>
    
</template>
<script>
import * as profileService from '../controller/service/ProfileService'

export default {
    name: 'FavList',
    data(){
        return {
            favList : Array,
            listName : ''
        }
    },
    async created(){
        this.favList = await profileService.getFavList()
    },
}
</script>
<style scoped>

</style>