<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>
<script>
export default {
    name: 'Header',
    props: {
        title : String,
    },
}
</script>
<style scoped>
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
        margin-bottom: 70px;
        background: radial-gradient(
            circle at 33% 100%,
            #fed373 4%,
            #f15245 30%,
            #d92e7f 62%,
            #9b36b7 85%,
            #515ecf);
        ;
    }
</style>