<template>
    <div>
        <div class="home-button">
            <md-button class="md-accent md-raised" @click="goTo()">GO TO HOME</md-button>
        </div>
        <md-card >
            <md-card-header>
                <section v-if="profile">
                    <md-card-media md-big>
                        <img :src="profile.picture ? profile.picture.large : ''" alt="Profile">
                    </md-card-media>
                    <Map v-if="coordinates" :coordinates="coordinates"></Map>
                    <md-card-actions>
                        <md-dialog-prompt
                            @input="favs()"
                            :md-active.sync="dialogActive"
                            v-model="favListName"
                            md-title="Write the name of the list where you want to save the profile"
                            md-input-maxlength="30"
                            md-input-placeholder="Type the name..."
                            md-confirm-text="Done" />
                        <md-dialog-alert
                            :md-active.sync="alertActive"
                            :md-content="alertValue"/>
                        <md-button class="md-accent md-raised" @click="dialogActive = true">Add to Favs</md-button>
                    </md-card-actions>
                </section>
            </md-card-header>
            <md-card-content>
                    <div class="md-title">{{profile.name.title}} {{profile.name.first}} {{profile.name.last}}</div>
                    <div class="md-subhead">{{profile.email}}</div>
            </md-card-content>
            <md-card-content v-if="profile.location">
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
            dialogActive: false,
            alertActive: false,
            alertValue: '',
            favListName:''
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
            this.alertValue = await profileService.saveProfileInList({
                name: this.favListName,
                profile: this.profile
            })
            this.alertActive = true
        },
        goTo(){
            this.$router.push({ name: 'Home'})
        }
    },
}
</script>
<style scoped>
    .home-button{
        display:flex;
        justify-content: flex-end;
    }
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