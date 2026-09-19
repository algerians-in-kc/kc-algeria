<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { LANGUAGES, INTAKE_CITIES, HELP_TYPES, AVAILABILITY } from '$lib/data/intake';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let city = $state('');
	let availability = $state('');
	let why = $state('');
	let languages = $state<string[]>([]);
	let helpTypes = $state<string[]>([]);
	let canHelpWomenFamilies = $state(false);
	let consent = $state(false);
	let codeOfConduct = $state(false);
	let honeypot = $state('');

	let sending = $state(false);
	let sent = $state(false);
	let errorMsg = $state('');

	function toggle(list: string[], value: string): string[] {
		return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
	}

	const valid = $derived(
		name.trim().length >= 2 &&
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
			languages.length > 0 &&
			helpTypes.length > 0 &&
			consent &&
			codeOfConduct,
	);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!valid) return;
		sending = true;
		errorMsg = '';
		try {
			const res = await fetch('/api/volunteer', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					phone: phone.trim(),
					city,
					availability,
					why: why.trim(),
					languages,
					helpTypes,
					canHelpWomenFamilies,
					consent,
					codeOfConduct,
					website: honeypot,
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
		}
	}
</script>

<svelte:head>
	<title>Become a Volunteer — Algerians in KC</title>
	<meta
		name="description"
		content="Volunteer to help Algerian newcomers settle in Kansas City. Airport pickups, paperwork, translation, orientation, and more — in Tamazight, French, Arabic, or English."
	/>
	<link rel="canonical" href="https://algeriansinKC.com/volunteer" />
</svelte:head>

<PageHeader
	title="Become a Volunteer"
	subtitle="Help a newcomer the way you wish someone had helped you."
	backHref="/community"
	backLabel="Back to community"
/>

<div class="max-w-2xl mx-auto px-4 py-10">
	{#if sent}
		<div class="bg-green-50 rounded-2xl border border-green-200 p-10 text-center">
			<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
				<i class="fa-solid fa-check text-green-600 text-2xl"></i>
			</div>
			<h2 class="text-xl font-bold text-gray-900 mb-2">Thank you for stepping up! 🌟</h2>
			<p class="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
				A coordinator will reach out to you within a few days to say hello and learn a bit more before
				connecting you with newcomers. We're grateful you're here.
			</p>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="space-y-6" novalidate>
			<!-- Honeypot -->
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
						<label for="email" class="block text-sm font-semibold text-gray-700 mb-1.5">Email <span class="text-red-400">*</span></label>
						<input id="email" type="email" bind:value={email} required placeholder="your@email.com" autocomplete="email" class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none placeholder:text-gray-400" />
					</div>
					<div>
						<label for="phone" class="block text-sm font-semibold text-gray-700 mb-1.5">Phone / WhatsApp <span class="text-gray-400 font-normal">(optional)</span></label>
						<input id="phone" type="tel" bind:value={phone} placeholder="(optional)" autocomplete="tel" class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none placeholder:text-gray-400" />
					</div>
					<div>
						<label for="city" class="block text-sm font-semibold text-gray-700 mb-1.5">City</label>
						<select id="city" bind:value={city} class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white">
							<option value="">Select…</option>
							{#each INTAKE_CITIES as c}<option value={c}>{c}</option>{/each}
						</select>
					</div>
				</div>
			</div>

			<!-- Languages -->
			<fieldset class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
				<legend class="text-sm font-semibold text-gray-700 mb-3 px-1">Languages you speak <span class="text-red-400">*</span></legend>
				<div class="flex flex-wrap gap-2">
					{#each LANGUAGES as lang}
						<button type="button" onclick={() => (languages = toggle(languages, lang))} class="px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors {languages.includes(lang) ? 'bg-green-600 text-white border-green-600' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-green-300'}">
							{lang}
						</button>
					{/each}
				</div>
			</fieldset>

			<!-- Help types -->
			<fieldset class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
				<legend class="text-sm font-semibold text-gray-700 mb-3 px-1">How can you help? <span class="text-red-400">*</span></legend>
				<div class="grid sm:grid-cols-2 gap-2">
					{#each HELP_TYPES as help}
						<label class="flex items-center gap-2.5 px-3 py-2 rounded-xl border cursor-pointer transition-colors {helpTypes.includes(help) ? 'bg-green-50 border-green-200' : 'border-gray-200 hover:bg-gray-50'}">
							<input type="checkbox" checked={helpTypes.includes(help)} onchange={() => (helpTypes = toggle(helpTypes, help))} class="accent-green-600" />
							<span class="text-sm text-gray-700">{help}</span>
						</label>
					{/each}
				</div>
			</fieldset>

			<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
				<div>
					<label for="availability" class="block text-sm font-semibold text-gray-700 mb-1.5">Availability</label>
					<select id="availability" bind:value={availability} class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white">
						<option value="">Select…</option>
						{#each AVAILABILITY as a}<option value={a}>{a}</option>{/each}
					</select>
				</div>
				<label class="flex items-start gap-2.5 cursor-pointer">
					<input type="checkbox" bind:checked={canHelpWomenFamilies} class="mt-0.5 accent-green-600" />
					<span class="text-sm text-gray-700">I'm comfortable being matched with women and families who prefer a woman volunteer.</span>
				</label>
				<div>
					<label for="why" class="block text-sm font-semibold text-gray-700 mb-1.5">A little about you <span class="text-gray-400 font-normal">(optional)</span></label>
					<textarea id="why" bind:value={why} rows="3" placeholder="Why you'd like to help, how long you've been in KC, anything you'd like us to know." class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-y placeholder:text-gray-400"></textarea>
				</div>
			</div>

			<!-- Consent + code of conduct -->
			<div class="bg-green-50/60 rounded-2xl border border-green-100 p-6 space-y-3">
				<label class="flex items-start gap-2.5 cursor-pointer">
					<input type="checkbox" bind:checked={codeOfConduct} class="mt-0.5 accent-green-600" />
					<span class="text-sm text-gray-700">I agree to treat newcomers with respect and kindness, meet in public places when meeting for the first time, and never pressure anyone. <a href="/terms" target="_blank" rel="noopener" class="text-green-700 underline">Code of conduct<i class="fa-solid fa-arrow-up-right-from-square text-[0.6rem] ms-1" aria-hidden="true"></i><span class="sr-only"> (opens in a new tab)</span></a>.</span>
				</label>
				<label class="flex items-start gap-2.5 cursor-pointer">
					<input type="checkbox" bind:checked={consent} class="mt-0.5 accent-green-600" />
					<span class="text-sm text-gray-700">I agree that a coordinator may store my information and contact me about volunteering. <a href="/privacy" target="_blank" rel="noopener" class="text-green-700 underline">Privacy policy<i class="fa-solid fa-arrow-up-right-from-square text-[0.6rem] ms-1" aria-hidden="true"></i><span class="sr-only"> (opens in a new tab)</span></a>.</span>
				</label>
			</div>

			{#if errorMsg}
				<div class="bg-red-50 text-red-700 text-sm rounded-xl px-4 py-3 flex items-start gap-2 border border-red-100">
					<i class="fa-solid fa-circle-exclamation mt-0.5 shrink-0"></i><span>{errorMsg}</span>
				</div>
			{/if}

			<button type="submit" disabled={sending || !valid} class="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-sm">
				{#if sending}<i class="fa-solid fa-spinner fa-spin"></i> Sending…{:else}<i class="fa-solid fa-handshake"></i> Sign Up to Volunteer{/if}
			</button>
			<p class="text-xs text-gray-400 text-center">We vet every volunteer before connecting them with newcomers.</p>
		</form>
	{/if}
</div>
