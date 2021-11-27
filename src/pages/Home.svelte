<script lang="ts">
  import { onMount } from "svelte";

  import Card from "../components/Card.svelte";
  import type { Idol } from "../models/idol";
  import { getIdols } from "../service";

  let search = "";
  let loading = false;
  let idols: Idol[] = [];

  async function searchIdol() {
    loading = true;
    window.history.replaceState({}, null, `?search=${search}`);

    const result = await getIdols(search);
    idols = result.result;

    loading = false;
  }

  onMount(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    console.log(urlSearchParams);
    search = urlSearchParams.get("search") || "";

    searchIdol();
  });
</script>

<svelte:head>
  <title>JAV Wikipedia</title>
</svelte:head>
<main>
  <div class="ui container">
    <h1 class="ui header center aligned">JAV Idols Wikipedia 😏</h1>

    <form class="ui fluid action input" on:submit|preventDefault={searchIdol}>
      <input
        bind:value={search}
        type="text"
        placeholder="Enter JAV Idol Name..."
      />
      <button class="ui button" type="submit" class:loading>
        <i class="search icon" />
        Search
      </button>
    </form>

    <div class="idols">
      <div class="ui six stackable cards">
        {#each idols as idol (idol.id)}
          <Card {idol} />
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  main {
    font-family: "Nunito Sans", sans-serif;
    padding-top: 2rem;
  }

  .idols {
    margin-top: 1rem;
  }
</style>
