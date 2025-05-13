<script lang="ts" setup>
const inString ="<span style=\"font-family: 'Times New Roman', Times, serif; font-size: 16px; font-style: italic;\"><span style=\"display: inline-flex; flex-direction: column; line-height: 0.9; font-size: 0.8em; vertical-align: middle; margin-right: 0.2em;\"><span>1</span><span style=\"margin-top: -1em; margin-bottom: 0.1em; font-weight: 900;\">_</span><span>2</span></span><span><span>H</span><span style=\"font-size: 0.7em; vertical-align: sub;\">2</span><span>O</span></span></span>";
console.log(inString);
</script>
<template>
  <span
    style="
      font-family: 'Times New Roman', Times, serif;
      font-size: 16px;
      font-style: italic;
    "
  >
    <span
      style="
        display: inline-flex;
        flex-direction: column;
        line-height: 0.9;
        font-size: 0.8em;
        vertical-align: middle;
        margin-right: 0.2em;
      "
    >
      <span>1</span>
      <span style="margin-top: -1em; margin-bottom: 0.1em; font-weight: 900"
        >_</span
      >
      <span>2</span>
    </span>
    <span>
      <span>H</span>
      <span style="font-size: 0.7em; vertical-align: sub">2</span>
      <span>O</span>
    </span>
  </span>
</template>
