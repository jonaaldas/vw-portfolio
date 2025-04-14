<template>
  <div class="portfolio-container">
    <iframe
      src="https://docs.google.com/viewer?url=https://k2v5aihjnd.ufs.sh/f/YlnYmwr2Dbqp9oNYxCU3Sye4fhdA91sC0NLazVFKwvRg5jbU&embedded=true"
      class="w-full h-screen iframe-content"
      scrolling="yes"
      allow="autoplay"
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.portfolio-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch; /* For better scrolling on iOS devices */
}

.iframe-content {
  width: 100%;
  height: 100vh;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .iframe-content {
    height: 100vh !important;
    min-height: 100vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
  }
}
</style>
