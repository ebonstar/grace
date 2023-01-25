<template>
  <main>
    <div class="grid">
      <div class="search">search</div>
      <div class="one">one</div>
      <div class="two">two</div>
    </div>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "search"
    "one"
    "two";
}

.search {
  grid-area: search;
}

.one {
  grid-area: one;
}

.two {
  grid-area: two;
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
    gap: 1rem 1rem;
    grid-auto-flow: row;
    grid-template-areas:
      "search search"
      "one two";
  }
}
</style>
