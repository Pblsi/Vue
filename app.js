const app = Vue.createApp({
    // data, funtions to react to events that we want
    // dont do this its gonna get messy template: '<h2> i am a template </h2>'

    // conditional rendering
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: ' Brandon Smaop',
            age: 46
        }
    },
    methods:{
toggleShowbooks(showBooks){this.showBooks= !this.showBooks}
    },
    
})

app.mount('#app')