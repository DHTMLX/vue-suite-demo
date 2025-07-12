<template>
  <div class="wrapper-content">
    <LeftContent />
    <RightContent />
  </div>
</template>
  
<script>
import LeftContent from "./LeftPanel/LeftContent.vue";
import RightContent from "./RightPanel/RightContent.vue";

export default {
  components: {
    LeftContent,
    RightContent
  }
};
</script>
