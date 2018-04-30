<template>
  <div id="quote">
    <h1>{{ quoteText }}</h1>
    <h2>{{ quoteAuthor }}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            quoteText: 'test text',
            quoteAuthor: 'Some Name',
        };
    },
};
</script>

<style>
    #quote {
        border: 1px solid red;
        height: 300px;
        margin: 10% auto;
        min-height: 200px;
        width: 80%;
    }
    #quote h1 {
        margin-top: 8%;
        text-align: center;
    }

    #quote h2 {
        text-align: right;
        margin-right: 5%;
        font-style: italic;
    }
</style>
