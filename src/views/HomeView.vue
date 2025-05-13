<script lang="ts" setup>
// font-family: Arial, sans-serif;
const example =
  "<span style=\"font-family: 'Times New Roman', serif; font-size: 16px; padding-bottom: 1em; display: inline-block; vertical-align: middle; position: relative;\">\n" +
  "  max\n" +
  '  <span style="position: absolute; font-size: 0.7em; bottom: 0.6em; left: 0; right: 0; text-align: start; line-height: 1;">\n' +
  "    0≤x≤1\n" +
  "  </span>\n" +
  '  <span style="margin-left: 0.2em;">\n' +
  '    xe<span style="vertical-align: super; font-size: smaller;">-x<span style="font-size: smaller;">2</span></span>\n' +
  "  </span>\n" +
  "</span>";
console.log(example.replace("\\", ""));
</script>

<template>
  <span
    style="
      font-size: 16px;
      font-family: 'Times New Roman', Times, serif;
      display: inline;
    "
  >
    <span style="display: inline-flex; flex-direction: column; font-size: 0.7em;">
      <span style="line-height: 0.88;">227</span>
      <span style="line-height: 0.88;">90</span>
    </span>
    <span style="font-style: italic; vertical-align: -7px;">
      <span >Th</span>
      <span style="vertical-align: super; font-size: 0.7em;">+</span>
    </span>
  </span>
</template>
