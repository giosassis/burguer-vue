const myApp = {
  data() {
    return {
      name: "",
      input_name: "",

    };
  },
  methods: {
    submitForm(event) {
        event.preventDefault();
        console.log(this.input_name);
        this.name = this.input_name
    }
  }
};

Vue.createApp(myApp).mount('#app');