<template>
  <div>
    <CardGeneric title="Twitter" :state="state" :body="annnouncement" class="mb-10">
      <div class="flex w-full justify-between items-center">
        <div class="text-xs">
          Character Count:
          <strong>{{ annnouncement?.length }}</strong>
        </div>
        <div>
          <button class="btn btn-neutral" @click="generate()">Regenerate</button>
          <a :href="postURL" target="_blank" class="btn btn-primary" @click.prevent="post">Post</a>
        </div>
      </div>
    </CardGeneric>
  </div>
</template>
<script setup lang="ts">

const props = defineProps<{
  url: string;
  temperature: Number;
}>();
const {chat, state,firstMessage } = useChatAi({agent: "twitter"})
const annnouncement = computed(() => firstMessage.value?.content)


const generate = () =>nextTick(()=>chat(props));
defineExpose({
  generate
})

const postURL = computed(
  () =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    annnouncement.value || ''
  )}`
)

</script>
