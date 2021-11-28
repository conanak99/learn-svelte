<script lang="ts">
  import { Link, useNavigate } from "svelte-navigator";
  import { onMount } from "svelte";
  import type { Idol } from "../models/idol";
  import type { Movie } from "../models/movie";
  import { getIdolById, getMovies } from "../service";

  export let id: string;

  let idol: Idol;
  let movies: Movie[];
  let loading = true;
  const navigate = useNavigate();

  onMount(async () => {
    const result = await Promise.all([getIdolById(id), getMovies(id)]);
    idol = result[0];
    movies = result[1].result;
    loading = false;
  });
</script>

<svelte:head>
  <title>{idol ? idol.name : ""} - JAV Wikipedia</title>
</svelte:head>

<div class="ui container">
  <div class="nav">
    <div class="ui breadcrumb">
      <a href="#" on:click={() => navigate(-1)} class="section">Home</a>
      <i class="right angle icon divider" />
      <div class="active section">{idol ? idol.name : ""}</div>
    </div>
  </div>

  {#if loading}
    <div class="ui active centered inline loader" />
  {:else}
    <div class="idol">
      <img
        class="ui centered small circular image"
        src={idol.imageUrl}
        alt={idol.name}
      />
      <h1 class="ui header center aligned">{idol.name} ({idol.japanName})</h1>
      {#if idol.birthday}
        <div class="ui label">
          <i class="icon calendar" />
          {idol.birthday}
        </div>
      {/if}

      {#if idol.height}
        <div class="ui label">
          Height <div class="detail">{idol.height}cm</div>
        </div>
      {/if}
      {#if idol.bust}
        <div class="ui label">
          Three sizes <div class="detail">
            {idol.bust}-{idol.waist}-{idol.hip}
          </div>
        </div>
      {/if}
    </div>

    <div class="ui divided items">
      {#each movies as movie (movie.name)}
        <div class="item">
          <a href={movie.siteUrl} target="_blank" class="image movie-image">
            <img src={movie.imageUrl} alt={movie.name} />
          </a>
          <div class="content">
            <a href={movie.siteUrl} target="_blank" class="header">
              {movie.name}
            </a>

            <div class="description">
              <div class="ui label">
                <i class="icon calendar" />
                {movie.date}
              </div>
              {#if movie.review}
                <div class="ui label">
                  <i class="icon star" />
                  {movie.review.average} ({movie.review.count})
                </div>
              {/if}
            </div>
            <div class="extra">
              <p>Makers: {movie.maker.map((m) => m.name).join(",")}</p>
              <p>Actress: {movie.actress.map((a) => a.name).join(",")}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .nav {
    padding-top: 1rem;
  }

  .image.movie-image {
    width: 90px !important;
  }

  .idol {
    max-width: 50rem;
    margin: 1rem auto 2rem auto;
    text-align: center;
  }
</style>
