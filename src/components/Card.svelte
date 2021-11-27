<script lang="ts">
  import { Link } from "svelte-navigator";
  import type { Idol } from "../models/idol";

  export let idol: Idol;
</script>

<div class="card">
  <Link to={`idol/${idol.id}`} class="image">
    <img src={idol.imageUrl} alt={idol.name} />
  </Link>
  <div class="content">
    <Link to={`idol/${idol.id}`} class="header">
      {idol.name} ({idol.japanName})
    </Link>
    {#if idol.birthday}
      <div class="meta">
        <i class="icon calendar" />
        {idol.birthday}
      </div>
    {/if}
  </div>

  <div class="extra content">
    {#if idol.height}
      <p>Height: {idol.height}cm</p>
    {/if}
    {#if idol.bust}
      Three sizes: {idol.bust}-{idol.waist}-{idol.hip}
    {/if}
  </div>
</div>
