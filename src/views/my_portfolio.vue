<template>
  <div>
    <iframe v-if="currentChunk" :src="currentChunk" class="w-full h-screen"></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentChunk = ref(null);
const progress = ref(0);

const loadPDF = async () => {
  const pdfUrl = "https://utfs.io/f/C8qVjzdwVfIiGutkVrAfrZGj76QWc0D2MCPTXpwtx98VORUk";
  try {
    const response = await fetch(pdfUrl);
    const reader = response.body.getReader();
    const contentLength = response.headers.get("content-length");

    let receivedLength = 0;
    const chunks = [];

    while (true) {
      try {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(value);
        receivedLength += value.length;
        progress.value = Math.round((receivedLength / contentLength) * 100);

        if (currentChunk.value) {
          URL.revokeObjectURL(currentChunk.value);
        }
        const blob = new Blob(chunks, { type: "application/pdf" });
        currentChunk.value = URL.createObjectURL(blob);
      } catch (err) {
        console.error("Chunk read error:", err);
        break;
      }
    }
  } catch (err) {
    console.error("PDF load error:", err);
  }
};

const initLoad = () => {
  loadPDF().catch((err) => console.error("Init error:", err));
};

onMounted(initLoad);

onUnmounted(() => {
  if (currentChunk.value) {
    URL.revokeObjectURL(currentChunk.value);
  }
});
</script>

<style scoped></style>
