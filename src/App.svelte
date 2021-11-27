<script lang="ts">
  import { Router, Link, Route } from "svelte-navigator";

  import Home from "./pages/Home.svelte";
  import IdolInfo from "./pages/IdolInfo.svelte";
</script>

<Router primary={false}>
  <Route path="/">
    <Home />
  </Route>
  <Route path="idol/:id" let:params>
    <IdolInfo id={params.id} />
  </Route>
</Router>
