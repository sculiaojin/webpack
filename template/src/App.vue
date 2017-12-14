<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'

{{/unless}}
export default {
  name: 'app'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
</script>

<style lang="less">
@import "./less/index.less";
</style>
