<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>O seu nome é: {{ nome }}</p>
  </div>
</template>

<script>
export default {
  name: "PrimeiroComponente",
  data() {
    return {
      nome: "Giovana",
    };
  },
};
</script>
 