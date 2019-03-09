<template>
    <div>
        <h1>Weather App</h1>
        <h2>{{todaysDate}}</h2>
    </div>
</template>

<script>
export default {
    name: "Headings",
    props: ["todaysDate"]
}
</script>