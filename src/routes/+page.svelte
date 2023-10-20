<script>
	export let data;
</script>

<h1>Users</h1>
{#each data.users.users as user}
	<p>{user.displayName}</p>
{/each}
