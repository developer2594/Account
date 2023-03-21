<template>
  <Header msg="Welcome to Your Vue.js App" />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  // outline: none;
}
a:focus,
a:active {
  // outline: none;
}
html,
body {
  height: 100%;
  min-width: 320px;
}
body {
  line-height: 1;
  font-family: sans-serif;
  font-size: 16px;
  //text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}
input,
button,
textarea {
  font-family: sans-serif;
  font-size: inherit;
}
button {
  cursor: pointer;
  color: inherit;
  background-color: inherit;
}
a {
  color: inherit;
}
a:link,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
//========================================================================================================================================================
#app {
  display: grid;
  overflow: hidden;
  border: 1px solid red;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  border: 1px solid green;
}
</style>
