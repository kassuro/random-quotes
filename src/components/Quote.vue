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
        background: #3F51B5;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, .3),
            -3px 1px 8px rgba(0, 0, 0, .3);
        color: #FFF;
        height: 300px;
        margin: 10% auto;
        min-height: 300px;
        padding: 15px;
        position: relative;
        width: 80%;
    }
    #quote h1 {
        font-family: 'Tangerine', cursive;
        font-size: 2.2rem;
        margin-top: 8%;
        padding: 10px;
        text-align: center;
    }

    #quote h2 {
        text-align: right;
        margin-right: 5%;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-style: italic;
        font-weight: 400;
    }

    #quote button {
        background: #7986CB;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .3),
            -1px 1px 5px rgba(0, 0, 0, .3);
        border: none;
        bottom: 30px;
        color: #FFF;
        font-family: 'Roboto', sans-serif;
        height: 30px;
        position: absolute;
        right: 15px;
        width: 100px;
    }

    #quote button:active {
        box-shadow: none;
    }


</style>
