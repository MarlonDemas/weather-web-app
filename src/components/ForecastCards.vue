<template>
    <div class="row">
        <div v-for="(list, index) in forecastList" :key="index" class="card bg-light mb-3" style="width: 100%">
            <div class="card-header">
                {{ days[new Date(list.dt * 1000).getDay()] }}, {{ new Date(list.dt * 1000).getDate() }} {{ month[new Date(list.dt * 1000).getMonth()] }} {{new Date(list.dt * 1000).getFullYear()}}
            </div>
            <div class="card-body">
                <h4 class="card-title">Weather Forecast</h4>
                <div class="card-text">
                    <div>{{Math.round(list.main.temp - 273)}} &#8451;</div>
                    <div>{{list.weather.description}}</div>
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
        computed: {
            forecastList() {
                return this.forecast.list.filter(l => new Date(l.dt * 1000).getHours() == 14);
            }
        },
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