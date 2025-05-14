<template>
  <span style="
      font-family: 'Times New Roman', Times, serif;
      font-size: 16px;
      font-style: italic;
    ">
    <span style="
        display: inline-flex;
        flex-direction: column;
        line-height: 0.9;
        font-size: 0.8em;
        vertical-align: middle;
        margin-right: 0.2em;
      ">
      <span>1</span>
      <span style="margin-top: -1em; margin-bottom: 0.1em; font-weight: 900">_</span>
      <span>2</span>
    </span>
    <span>
      <span>H</span>
      <span style="font-size: 0.7em; vertical-align: sub">2</span>
      <span>O</span>
    </span>
  </span>
</template>
<script lang="ts" setup>
const completed = {
  "": "",
  "H^{3}HO": "<span style=\"font-family: 'Times New Roman', Times, serif; font-size: 16px; font-style: italic;\"><span style=\"margin-right: 0.1em\">H</span><span style=\"vertical-align: super\">3</span><span>HO</span></span>",
  "^{227}_{90}Th^{+}": "<span style=\"font-size: 16px; font-family: 'Times New Roman', Times, serif; display: inline; vertical-align: 10px;\"><span style=\"display: inline-flex; flex-direction: column; font-size: 0.7em;\"><span style=\"line-height: 0.88;\">227</span><span style=\"line-height: 0.88;\">90</span></span><span style=\"font-style: italic; vertical-align: -7px;\"><span>Th</span><span style=\"vertical-align: super; font-size: 0.7em;\">+</span></span></span>",
  "\\tfrac{1}{2} H_{2}O": "<span style=\"font-family: 'Times New Roman', Times, serif; font-size: 16px; font-style: italic;\"><span style=\"display: inline-flex; flex-direction: column; line-height: 0.9; font-size: 0.8em; vertical-align: middle; margin-right: 0.2em;\"><span>1</span><span style=\"margin-top: -1em; margin-bottom: 0.1em; font-weight: 900;\">_</span><span>2</span></span><span><span>H</span><span style=\"font-size: 0.7em; vertical-align: sub;\">2</span><span>O</span></span></span>",
};
console.log(completed);
</script>
