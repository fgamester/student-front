<template>
  <span style="font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;">
    <span>▢</span>
    <span style="font-size: 0.625em; vertical-align: super;">▢</span>
    <span style="font-size: 0.625em; vertical-align: sub; margin-left: -0.825em;">▢</span>
  </span>
</template>
<script lang="ts" setup>
const completed = {
  "\\overset{#0}{#0}": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px; vertical-align: middle;\"><span style=\"display: inline-flex; flex-direction: column; line-height: 0.75em; vertical-align: 0.75em;\"><span style=\"font-size: 0.625em; align-self: center;\">▢</span><span>▢</span></span></span>",
  "#0_{#0}": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span>▢</span><span style=\"font-size: 0.625em; vertical-align: sub;\">▢</span></span>",
  "#0^{#0}": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span>▢</span><span style=\"font-size: 0.625em; vertical-align: super;\">▢</span></span>",
  "#0_{#0}#0": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span>▢</span><span style=\"font-size: 0.625em; vertical-align: super;\">▢</span><span style=\"font-size: 0.625em; vertical-align: sub; margin-left: -0.825em;\">▢</span></span>",
  "": "",
  "\\overset{+4}{Mn}": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px; vertical-align: middle;\"><span style=\"display: inline-flex; flex-direction: column; line-height: 0.75em; vertical-align: 0.75em;\"><span style=\"font-size: 0.625em; align-self: center;\">+4</span><span style=\"font-style: italic;\">Mn</span></span></span>",
  "MnO_{2}": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span style=\"font-style: italic;\">MnO</span><span style=\"font-size: 0.625em; vertical-align: sub;\">2</span></span>",
  "H_{2}O": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span style=\"font-style: italic;\">H</span><span style=\"font-size: 0.625em; vertical-align: sub;\">2</span><span style=\"font-style: italic;\">O</span></span>",
  "Sb_{2}O_{3}": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span style=\"font-style: italic;\">Sb</span><span style=\"font-size: 0.625em; vertical-align: sub;\">2</span><span style=\"font-style: italic;\">O</span><span style=\"font-size: 0.625em; vertical-align: sub;\">3</span></span>",
  "Y^{99+}": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span style=\"font-style: italic; margin-right: 0.15em;\">Y</span><span style=\"vertical-align: super; font-size: 0.625em;\">99+</span></span>",
  "[AgCl_{2}]^{-}": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span>[</span><span style=\"font-style: italic;\">AgCl</span><span style=\"vertical-align: sub; font-size: 0.75em;\">2</span><span>]</span><span style=\"vertical-align: 0.5em; line-height: 0.5em;\">–</span></span>",
  "CrO_{4}^{2-}": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span style=\"font-style: italic;\">CrO</span><span style=\"display: inline-flex; flex-direction: column; line-height: 0.75em; vertical-align: middle; margin-left: 0.05em;\"><span style=\"font-size: 0.75em;\">2–</span><span style=\"font-size: 0.75em;\">4</span></span></span>",
  "n H_{2}O": "<span style=\"font-family: 'Times New Roman', Times, serif; display: inline-block; font-size: 16px;\"><span style=\"font-style: italic;\">nH</span><span style=\"vertical-align: sub; font-size: 0.75em;\">2</span><span style=\"font-style: italic;\">O</span></span>",
  "\\tfrac{1}{2} H_{2}O": "<span style=\"font-family: 'Times New Roman', Times, serif; font-size: 16px; font-style: italic;\"><span style=\"display: inline-flex; flex-direction: column; line-height: 0.9; font-size: 0.8em; vertical-align: middle; margin-right: 0.2em;\"><span>1</span><span style=\"margin-top: -1em; margin-bottom: 0.1em; font-weight: 900;\">_</span><span>2</span></span><span><span>H</span><span style=\"font-size: 0.7em; vertical-align: sub;\">2</span><span>O</span></span></span>",
  "H^{3}HO": "<span style=\"font-family: 'Times New Roman', Times, serif; font-size: 16px; font-style: italic;\"><span style=\"margin-right: 0.1em\">H</span><span style=\"vertical-align: super\">3</span><span>HO</span></span>",
  "^{227}_{90}Th^{+}": "<span style=\"font-size: 16px; font-family: 'Times New Roman', Times, serif; display: inline; vertical-align: 10px;\"><span style=\"display: inline-flex; flex-direction: column; font-size: 0.7em;\"><span style=\"line-height: 0.88;\">227</span><span style=\"line-height: 0.88;\">90</span></span><span style=\"font-style: italic; vertical-align: -7px;\"><span>Th</span><span style=\"vertical-align: super; font-size: 0.7em;\">+</span></span></span>",
};
console.log(completed);
</script>
