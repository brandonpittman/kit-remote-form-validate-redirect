<script lang="ts">
	import { save } from '../lib/data.remote.ts';

	let { children } = $props();

	$effect(() => {
		save.fields.allIssues();
	});
</script>

{@render children()}
