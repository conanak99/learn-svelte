<script lang="ts">
  import type { Idol } from "../models/idol";

  export let idol: Idol;
</script>

<div class="card">
  <a href="#" class="image">
    <img src={idol.imageUrl} alt={idol.name} />
  </a>
  <div class="content">
    <a href="#" class="header">{idol.name} ({idol.japanName})</a>
    {#if idol.birthday}
      <div class="meta">
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
