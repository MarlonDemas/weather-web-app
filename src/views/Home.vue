<template>
    <div class="home">
        <div class="headings">
            <Headings v-bind:todaysDate="todaysDate" />
        </div>
        <WeatherCards v-bind:weathers="weathers" />
    </div>
</template>

<script>
    import Headings from '@/components/Headings';
    import WeatherCards from '@/components/WeatherCards';
    import Weather from '@/lib/Weather';
    import dayjs from 'dayjs';

    export default {
        name: 'home',
        components: {
            Headings,
            WeatherCards
        },
        data() {
            return {
                weathers: [
                    { id: 0, current: null },
                    { id: 1, current: null },
                    { id: 2, current: null }
                ],
                todaysDate: null
            };
        },
        mounted() {
                for (let i = 0; i < 3; i++) {
                    Weather.getWeather()[i].then(result => {
                        // console.log(result);
                        this.weathers[i].current = result;
                });                      
                }

                const now = new Date();
                this.todaysDate = dayjs(now).format('YYYY-MM-DD');
        }
    };
</script>

<style>
    body{
        padding: 1em;
    }

    h1, h2 {
        text-align: center;
    }

    .headings {
        margin-bottom: 2em;
    }

    .row {
        font-size: 2em;
        margin-bottom: 1em;
    }

    .card-text {
        display: flex;
        justify-content: space-between;
    }
</style>

