<script lang="ts">
	import { save } from '../../lib/data.remote.ts';
</script>

<form
	{...save.enhance(async ({ submit }) => {
		await submit();
	})}
>
	{#each ['yes', 'no'] as answer}
		<label>
			<input {...save.fields.answer.as('radio', answer)} onchange={() => save.validate()} />
			{answer}
		</label>
	{/each}
	<button>save</button>
	{#if save.result?.saved}<p>saved</p>{/if}
</form>
