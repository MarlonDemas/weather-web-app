<template>
    <div v-if="weathers[0].current" class="row">
        <div v-bind:key="weather.id" v-for="weather in weathers" class="card bg-light mb-3" style="width: 100%">
            <div class="card-header">{{weather.current.name}}</div>
            <div class="card-body">
                <h4 class="card-title">Current weather</h4>
                <div class="card-text">
                    <div>{{Math.round(weather.current.main.temp - 273)}} &#8451;</div>
                    <div>{{weather.current.weather[0].description}}</div>
                    <div><router-link :to="`forecast/${weather.id}`" class="btn btn-outline-primary">View forecast</router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeatherCards",
        props: ["weathers"]
    }
</script>