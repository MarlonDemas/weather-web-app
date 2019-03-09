<template>
  <div>
    <h1 style="text-align:center">{{todaysDate}}</h1>
    <h3>We have decided that we are in need for a live weather webapp</h3>
    <br>
    <p>We want to be able to see <b>Cape Town</b>, <b>Johannesburg</b> and <b>Durban</b> in a list and be able to click through to them and view a <b>5 day forecast</b></p>
    <br>
    <p>We had a developers spec meeting and these are the mockups that we want you to implement:</p>
    <ul>
      <li>
        <p>Location list:</p>
        <div>
          <img src="@/assets/location-list.jpeg" class="spec-pic"/>
        </div>
      </li>
      <li>
        <p>Location Forecast:</p>
        <div>
          <img src="@/assets/location-detail.jpeg" class="spec-pic"/>
        </div>
      </li>
    </ul>
    <p>
      We want you to consume the JSON data provided by the <a href="https://openweathermap.org/api">Openweathermap API</a> using the following API key:<strong> c60affe7bd71ca5cf3853f5a6fba4dbb</strong>
    </p>
    <p><strong>Look through the documentation to find the calls you need</strong></p>
  </div>
</template>

<script>

import dayjs from 'dayjs';

export default {
  data(){
    return {
      todaysDate: null
    }
  },
  mounted(){
    const now = new Date();
    this.todaysDate = dayjs(now).format('YYYY-MM-DD hh:mm:ss');
  }
}
</script>

<style scoped>
.spec-pic{
  position: relative;
  width: 350px;
}
ul {
    list-style: outside disc;
    margin-left: 1em;
}
</style>
