<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>

  :root {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }


  html, body{
    width: 100%;
    height: 100%;
    margin: 0;
  }
  #app{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

</style>
