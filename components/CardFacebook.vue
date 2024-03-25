<template>
  <div>
    <CardGeneric title="Facebook" :state="state" :body="annnouncement">
      <button class="btn btn-neutral" @click="generate">Regenerate</button>
      <a :href="postURL" class="btn btn-primary" @click.prevent="post">Post</a>
    </CardGeneric>
  </div>
</template>

<script setup lang="ts">

const { copy } = useClipboard()

const props = defineProps<{
  url: string;
  temperature: Number;
}>();

const {chat, state,firstMessage } = useChatAi({agent: "facebook"})
const annnouncement = computed(() => firstMessage.value?.content)

const generate = () =>nextTick(()=>chat(props));
defineExpose({
  generate
})

const postURL = computed(
  () =>
  `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    props.url
  )}`
)

function post() {
  copy(annnouncement.value || '');
  setTimeout(() => window.open(postURL.value, "_blank"), 500);
}

</script>
