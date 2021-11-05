<template>
  <div class="test-wrapper">
    <list-layout>
      <template slot="header">
        <div>1111</div>
      </template>
      <template slot="content">
        <!-- <al-table> -->

        <!-- </al-table> -->
      </template>
    </list-layout>
  </div>
</template>

<script>
import { getTestList } from '@/api/test'
import ListLayout from '@/components/ListLayout/index.vue'
// import AlTable from "@/components/AlTable/index.vue";
export default {
  components: {
    ListLayout
    // AlTable
  },
  data() {
    return {

    }
  },
  created() {
    getTestList().then((res) => {
      console.log('test', res)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
