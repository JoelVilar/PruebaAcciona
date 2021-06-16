<template>
    <div>
        <md-card >
            <md-card-header>
                <section>
                    <md-card-media md-big>
                        <img :src="profile.picture ? profile.picture.large : ''" alt="Profile">
                    </md-card-media>
                    <Map :if="profile.location.coordinates" :coordinates="coordinates"></Map>
                    <md-card-actions>
                        <md-button @click="favs()">Add to Favs</md-button>
                    </md-card-actions>
                </section>
            </md-card-header>
            <md-card-content>
                    <div class="md-title">{{profile.name.title}} {{profile.name.first}} {{profile.name.last}}</div>
                    <div class="md-subhead">{{profile.email}}</div>
            </md-card-content>
            <md-card-content :if="profile.location">
                <div class="md-title">Contact</div>
                <div class="md-subhead">{{profile.location.street.name}} ({{profile.location.street.number}}), {{profile.location.city}} ({{profile.location.state}}), {{profile.location.country}}</div>
                <div class="md-subhead">Tlf: {{profile.phone}}</div>
            </md-card-content>
        </md-card>
    </div>
</template>
<script>
import Map from '../Map.vue'
import * as profileService from '../../controller/service/ProfileService.mjs'

export default {
    name: 'Profile',
    components: {
        Map,
    },
    props: {
        uuid: String,
    },
    data(){
        return {
            profile : Object,
            coordinates: Object,
        }
    },
    async created(){
        this.profile = await profileService.getProfile(this.uuid)
        this.coordinates = {
            lat: parseFloat(this.profile.location.coordinates.latitude),
            lng: parseFloat(this.profile.location.coordinates.longitude)
        }
    },
    methods: {
        async favs(){
            const favListName = prompt("Write the name of the list where you want to save the profile")
            await profileService.saveProfileInList({
                name: favListName,
                profile: this.profile
            })
        },
    },
}
</script>
<style scoped>
    section{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-content: flex-end;
        background: radial-gradient(
            circle at 33% 100%,
            #fed373 4%,
            #f15245 30%,
            #d92e7f 62%,
            #9b36b7 85%,
            #515ecf);
        ;
    }
    section div{
        margin: 10px;
    }
</style>