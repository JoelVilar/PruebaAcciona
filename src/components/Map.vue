<template>
    <div>
        <gmap-map :center="coordinates" :zoom="7" style="width: 400px; height: 300px;">
            <gmap-marker :position="coordinates"></gmap-marker>
        </gmap-map>
    </div>
</template>
<script>
export default {
    name: 'Map',
    props: {
        coordinates: Object,
    },
    created(){
    },
}
</script>
<style scoped>

div{
    padding-left: 50px;
    padding-right: 50px;
}
</style>