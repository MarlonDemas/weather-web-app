<template>
    <div class="forecast">
        <div class="headings">
            <Headings :todaysDate="todaysDate" />
        </div>
        <div class="location">
            <div>
                <h2>{{forecast.city.name}}</h2>
            </div>
            <div>
                <h2 class="text-info">5 Day Forecast</h2>
            </div>
        </div>
        <ForecastCards :forecast="forecast" />
    </div>
</template>

<script>
    import Headings from '@/components/Headings';
    import LocationForecast from '@/lib/LocationForecast';
    import ForecastCards from '@/components/ForecastCards';

    export default {
        name: 'forecast',
        components: {
            Headings,
            ForecastCards
        },
        data() {
            return {
                todaysDate: null,
                forecast: {
                    city: {},
                    list: []
                },
                id: this.$route.params.id
            }
        },
        mounted() {
            LocationForecast.getForecast(this.$route.params.id).then(result => {
                this.forecast = result;
            });
        }
    }
</script>

<style scoped>
    .location {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1em;
    }

    @media only screen and (max-width: 540px) {
        .location {
            display: block;
        }
    }
</style>