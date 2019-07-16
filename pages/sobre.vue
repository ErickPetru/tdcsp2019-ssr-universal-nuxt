<template>
  <main class="container about">
    <h2>TDC SP 2019</h2>
    <h3>Server-Side Rendering e Universal Apps com com Vue.js e Nuxt.js</h3>

    <blockquote>
      <p>
        Demonstração de Server-Side Rendering e Universal Apps com Vue.js e Nuxt.js,
        criada como material de apoio para <i>talk</i> nas trilhas
        <a href="http://www.thedevelopersconference.com.br/tdc/2019/saopaulo/trilha-javascript" target="_blank">JavaScript</a> e
        <a href="http://www.thedevelopersconference.com.br/tdc/2019/saopaulo/trilha-javascript-2" target="_blank">JavaScript II</a> do
        <a href="http://www.thedevelopersconference.com.br/tdc/2019/saopaulo/trilhas" target="_blank">TDC SP 2019</a>.
      </p>
    </blockquote>

    <p>
      Para explicações detalhadas sobre como as coisas funcionam,
      dê uma olhada na <a href="https://nuxtjs.org" target="_blank">documentação do Nuxt.js</a>.
    </p>

    <p>
      <b>Ainda está com alguma dúvida?</b> Participe das
      <a href="https://github.com/vuejs-br/comunidades" target="_blank">comunidades Vue.js Brasil</a>
      e procupre pelo autor desta <i>talk</i> ou outros experientes apoiadores do
      <a href="https://br.vuejs.org/" target="_blank">Vue.js</a> em nosso país.</p>
  </main>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
.about {
  text-align: center;
}

.about h2 {
  margin: 3rem 0 1rem;
}

.about h3 {
  margin: 0;
}

.about blockquote, .about > p {
  margin: 2rem 0;
  padding: 0 10%;
}

.about blockquote {
  padding: 1rem 10%;
  background: #efefef;
}

.about a:hover {
  color: #ffb300;
}
</style>
