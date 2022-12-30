<template>
  <div>
    <header>
      <router-link :to="home">{{ title }}</router-link>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    home: String,
  },
};
</script>
