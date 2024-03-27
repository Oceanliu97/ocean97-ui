<!--
 * @ Author: Liu Yang
 * @ Create Time: 2024-03-21 16:40:49
 * @ Modified by: Liu Yang
 * @ Modified time: 2024-03-25 11:33:36
 * @ Description: -
 -->

<template>
   <div>
    <button class="ly-button">
      <slot></slot>
      <slot name="icon"></slot>
    </button>
  </div>
</template>

<script>

export default {
  name: 'LyButton',
  props: {
    icon: {
        type: String,
        default: ''
      },
      unit: {
        type: String,
        default: ''
      },
  },
  components: {},
  data () {
    return {}
  },
  computed: {
    
  },
  watch: {},
  created () {},
  methods: {
  },
}
</script> 

<style scoped>
.ly-button {
  display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
</style>
