<template>
  <div class="portfolio-container">
    <iframe
      src="https://k2v5aihjnd.ufs.sh/f/YlnYmwr2Dbqp9oNYxCU3Sye4fhdA91sC0NLazVFKwvRg5jbU"
      class="w-full h-screen overflow-auto"
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.portfolio-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch; /* For better scrolling on iOS devices */
}

@media (max-width: 768px) {
  iframe {
    height: 100% !important;
    min-height: 100vh;
    overflow-y: scroll;
  }
}
</style>
