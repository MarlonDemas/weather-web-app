<template>
    <div v-if="forecast" class="row">
        <div v-for="list in forecast.list" v-if="new Date(list.dt_txt).getHours() == 15" class="card bg-light mb-3" style="width: 100%">
            <div class="card-header">
                {{ days[new Date(list.dt_txt).getDay()] }}, {{ new Date(list.dt_txt).getDate() }} {{ month[new Date(list.dt_txt).getMonth()] }} {{new Date(list.dt_txt).getFullYear()}}
            </div>
            <div class="card-body">
                <h4 class="card-title">Weather Forecast</h4>
                <div class="card-text">
                    <div>{{Math.round(list.main.temp - 273)}} &#8451;</div>
                    <div>{{list.weather[0].description}}</div>
                    <div><button v-on:click="$router.go(-1)" class="btn btn-outline-primary">Current Weather</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ForecastCards",
        props: ["forecast"],
        data() {
            return {
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                month: ['Jan', 'Feb', 'Mar', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            }
        }
    }
</script>

<style scoped>
    .card-text {
        justify-content: space-between;
    }
</style>