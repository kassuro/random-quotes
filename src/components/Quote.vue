<template>
  <div id="quote">
    <h1>{{ quoteText }}</h1>
    <h2>{{ quoteAuthor }}</h2>
    <button @click="loadQuote">New Quote</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            quoteText: '',
            quoteAuthor: '',
        };
    },
    created() {
        this.loadQuote();
    },
    methods: {
        loadQuote() {
            axios.get('http://localhost:3000')
                .then(res => {
                    this.quoteText = res.data.text;
                    this.quoteAuthor = res.data.author.name;
                });
        },
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
