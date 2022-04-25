<template>
    <div class="sidebar">

    </div>
</template>

<script>
export default {
    props: {},
    setup() {

    }
}
</script>

<style>
:root {
  --sidebar-bg-color: #60DB89,
  --sidebar-item-hover: #F584EB,
  --sidebar-item-active: #6CF599

}
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}
</style>