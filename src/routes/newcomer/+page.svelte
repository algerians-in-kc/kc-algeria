<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Turnstile from '$lib/components/Turnstile.svelte';
	import { turnstileEnabled } from '$lib/turnstile';
	import { LANGUAGES, INTAKE_CITIES, HELP_TYPES, ARRIVAL_STATUS, URGENCY } from '$lib/data/intake';

	let name = $state('');
	let contact = $state('');
	let city = $state('');
	let arrivalStatus = $state('');
	let urgency = $state('');
	let details = $state('');
	let languages = $state<string[]>([]);
	let needs = $state<string[]>([]);
	let preferWomanVolunteer = $state(false);
	let consent = $state(false);
	let honeypot = $state('');
	let turnstileToken = $state('');
	let turnstile: Turnstile | undefined = $state();

	let sending = $state(false);
	let sent = $state(false);
	let errorMsg = $state('');

	function toggle(list: string[], value: string): string[] {
		return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
	}

	const valid = $derived(
		name.trim().length >= 2 &&
			contact.trim().length >= 3 &&
			needs.length > 0 &&
			consent &&
			(!turnstileEnabled || turnstileToken !== ''),
	);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!valid) return;
		sending = true;
		errorMsg = '';
		try {
			const res = await fetch('/api/newcomer', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: name.trim(),
					contact: contact.trim(),
					city,
					arrivalStatus,
					urgency,
					details: details.trim(),
					languages,
					needs,
					preferWomanVolunteer,
					consent,
					website: honeypot,
					turnstileToken,
				}),
			});
			const data = await res.json();
			if (!res.ok) {
				errorMsg = data.error ?? 'Something went wrong. Please try again.';
				return;
			}
			sent = true;
		} catch {
			errorMsg = 'Network error. Please try again or email contact@algeriansinKC.com.';
		} finally {
			sending = false;
			turnstile?.reset();
		}
	}
</script>

<svelte:head>
	<title>Get Help — Algerians in KC</title>
	<meta
		name="description"
		content="Just arrived in Kansas City? Request help from a vetted Algerian volunteer who speaks your language — with paperwork, housing, jobs, orientation, and more."
	/>
	<link rel="canonical" href="https://algeriansinKC.com/newcomer" />
</svelte:head>

<PageHeader
	title="Get Help Settling In"
	subtitle="Tell us what you need. A volunteer who speaks your language will reach out."
	backHref="/community"
	backLabel="Back to community"
/>

<div class="max-w-2xl mx-auto px-4 py-10">
	{#if sent}
		<div class="bg-green-50 rounded-2xl border border-green-200 p-10 text-center">
			<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
				<i class="fa-solid fa-hands-holding-heart text-green-600 text-2xl"></i>
			</div>
			<h2 class="text-xl font-bold text-gray-900 mb-2">We've got your request 💚</h2>
			<p class="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
				A coordinator will match you with a vetted volunteer and reach out soon — in your language.
				You're not alone here. Welcome to Kansas City.
			</p>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="space-y-6" novalidate>
			<div class="hidden" aria-hidden="true">
				<input name="website" type="text" bind:value={honeypot} tabindex="-1" autocomplete="off" />
			</div>

			<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
				<div class="grid sm:grid-cols-2 gap-4">
					<div>
						<label for="name" class="block text-sm font-semibold text-gray-700 mb-1.5">Name <span class="text-red-400">*</span></label>
						<input id="name" type="text" bind:value={name} required placeholder="Your name" autocomplete="name" class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none placeholder:text-gray-400" />
					</div>
					<div>
						<label for="contact" class="block text-sm font-semibold text-gray-700 mb-1.5">Email or WhatsApp <span class="text-red-400">*</span></label>
						<input id="contact" type="text" bind:value={contact} required placeholder="Best way to reach you" class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none placeholder:text-gray-400" />
					</div>
					<div>
						<label for="city" class="block text-sm font-semibold text-gray-700 mb-1.5">City (or where you're arriving)</label>
						<select id="city" bind:value={city} class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white">
							<option value="">Select…</option>
							{#each INTAKE_CITIES as c}<option value={c}>{c}</option>{/each}
						</select>
					</div>
					<div>
						<label for="arrival" class="block text-sm font-semibold text-gray-700 mb-1.5">Your situation</label>
						<select id="arrival" bind:value={arrivalStatus} class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white">
							<option value="">Select…</option>
							{#each ARRIVAL_STATUS as a}<option value={a}>{a}</option>{/each}
						</select>
					</div>
				</div>
			</div>

			<!-- Languages -->
			<fieldset class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
				<legend class="text-sm font-semibold text-gray-700 mb-3 px-1">Languages you're comfortable in</legend>
				<div class="flex flex-wrap gap-2">
					{#each LANGUAGES as lang}
						<button type="button" onclick={() => (languages = toggle(languages, lang))} class="px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors {languages.includes(lang) ? 'bg-green-600 text-white border-green-600' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-green-300'}">
							{lang}
						</button>
					{/each}
				</div>
			</fieldset>

			<!-- Needs -->
			<fieldset class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
				<legend class="text-sm font-semibold text-gray-700 mb-3 px-1">What do you need help with? <span class="text-red-400">*</span></legend>
				<div class="grid sm:grid-cols-2 gap-2">
					{#each HELP_TYPES as need}
						<label class="flex items-center gap-2.5 px-3 py-2 rounded-xl border cursor-pointer transition-colors {needs.includes(need) ? 'bg-green-50 border-green-200' : 'border-gray-200 hover:bg-gray-50'}">
							<input type="checkbox" checked={needs.includes(need)} onchange={() => (needs = toggle(needs, need))} class="accent-green-600" />
							<span class="text-sm text-gray-700">{need}</span>
						</label>
					{/each}
				</div>
			</fieldset>

			<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
				<div>
					<label for="urgency" class="block text-sm font-semibold text-gray-700 mb-1.5">How soon?</label>
					<select id="urgency" bind:value={urgency} class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white">
						<option value="">Select…</option>
						{#each URGENCY as u}<option value={u}>{u}</option>{/each}
					</select>
				</div>
				<label class="flex items-start gap-2.5 cursor-pointer">
					<input type="checkbox" bind:checked={preferWomanVolunteer} class="mt-0.5 accent-green-600" />
					<span class="text-sm text-gray-700">I would prefer to be matched with a woman volunteer.</span>
				</label>
				<div>
					<label for="details" class="block text-sm font-semibold text-gray-700 mb-1.5">Anything else? <span class="text-gray-400 font-normal">(optional)</span></label>
					<textarea id="details" bind:value={details} rows="3" placeholder="Write in Tamazight, French, Arabic, or English — whatever is easiest for you." class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-y placeholder:text-gray-400"></textarea>
				</div>
			</div>

			<div class="bg-green-50/60 rounded-2xl border border-green-100 p-6">
				<label class="flex items-start gap-2.5 cursor-pointer">
					<input type="checkbox" bind:checked={consent} class="mt-0.5 accent-green-600" />
					<span class="text-sm text-gray-700">I agree that a coordinator may store my request and connect me with a vetted volunteer, sharing what I've written here with them. <a href="/privacy" target="_blank" rel="noopener" class="text-green-700 underline">Privacy policy<i class="fa-solid fa-arrow-up-right-from-square text-[0.6rem] ms-1" aria-hidden="true"></i><span class="sr-only"> (opens in a new tab)</span></a>.</span>
				</label>
			</div>

			<Turnstile bind:this={turnstile} bind:token={turnstileToken} />

			{#if errorMsg}
				<div class="bg-red-50 text-red-700 text-sm rounded-xl px-4 py-3 flex items-start gap-2 border border-red-100">
					<i class="fa-solid fa-circle-exclamation mt-0.5 shrink-0"></i><span>{errorMsg}</span>
				</div>
			{/if}

			<button type="submit" disabled={sending || !valid} class="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-sm">
				{#if sending}<i class="fa-solid fa-spinner fa-spin"></i> Sending…{:else}<i class="fa-solid fa-paper-plane"></i> Request Help{/if}
			</button>
			<p class="text-xs text-gray-400 text-center">Free and confidential. Every volunteer is vetted by our team.</p>
		</form>
	{/if}
</div>
