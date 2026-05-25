<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$lib/components/PageHeader.svelte';

	let name = $state('');
	let email = $state('');
	let subject = $state(page.url.searchParams.get('subject') || '');
	let message = $state('');
	let honeypot = $state('');
	let sending = $state(false);
	let sent = $state(false);
	let errorMsg = $state('');

	const subjects = [
		{ value: '', label: 'Select a topic...' },
		{ value: 'newcomer', label: 'I just arrived — I need help' },
		{ value: 'volunteer', label: 'I want to volunteer' },
		{ value: 'directory', label: 'Add my business to the directory' },
		{ value: 'faith', label: 'Spiritual / faith question' },
		{ value: 'event', label: 'Submit a community event' },
		{ value: 'other', label: 'Other' },
	];

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!name.trim() || !email.trim() || !message.trim()) return;
		sending = true;
		errorMsg = '';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name: name.trim(), email: email.trim(), subject, message: message.trim(), website: honeypot })
			});
			const data = await res.json();
			if (!res.ok) { errorMsg = data.error ?? 'Something went wrong. Please try again.'; return; }
			sent = true;
		} catch {
			errorMsg = 'Network error. Please email contact@algeriansinKC.com directly.';
		} finally {
			sending = false;
		}
	}

	const valid = $derived(name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message.trim().length >= 10);
</script>

<svelte:head>
	<title>Contact — Algerians in KC</title>
	<meta name="description" content="Get in touch with Algerians in KC — we respond in Arabic, French, or English within 48 hours." />
	<link rel="canonical" href="https://algeriansinKC.com/contact" />
</svelte:head>

<PageHeader title="Contact Us" subtitle="We respond in Arabic, French, or English." />

<div class="max-w-3xl mx-auto px-4 py-10">
	<div class="grid md:grid-cols-3 gap-8">
		<!-- Sidebar -->
		<div class="space-y-5">
			<div>
				<h2 class="font-bold text-gray-900 mb-3">Reach us</h2>
				<a href="mailto:contact@algeriansinKC.com" class="flex items-start gap-3 text-sm text-gray-600 hover:text-green-600 transition-colors group">
					<div class="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors mt-0.5">
						<i class="fa-solid fa-envelope text-green-600"></i>
					</div>
					<div>
						<div class="font-semibold text-gray-800">Email</div>
						<div class="text-xs text-gray-500 mt-0.5">contact@algeriansinKC.com</div>
					</div>
				</a>
			</div>

			<div class="border-t border-gray-100 pt-5">
				<h3 class="text-sm font-semibold text-gray-700 mb-3">Quick links</h3>
				<ul class="space-y-2.5 text-sm">
					<li><a href="/community#volunteer" class="flex items-center gap-2 text-green-600 hover:underline"><i class="fa-solid fa-handshake text-xs"></i> Volunteer sign-up</a></li>
					<li><a href="/community#list" class="flex items-center gap-2 text-green-600 hover:underline"><i class="fa-solid fa-store text-xs"></i> List your business</a></li>
					<li><a href="/settle" class="flex items-center gap-2 text-green-600 hover:underline"><i class="fa-solid fa-house text-xs"></i> Newcomer guide</a></li>
				</ul>
			</div>

			<div class="border-t border-gray-100 pt-5">
				<p class="text-xs text-gray-500 leading-relaxed">We are volunteers. We aim to respond within 48 hours. Write in Arabic, French, Tamazight, or English.</p>
			</div>
		</div>

		<!-- Form -->
		<div class="md:col-span-2">
			{#if sent}
				<div class="bg-green-50 rounded-2xl border border-green-200 p-10 text-center">
					<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<i class="fa-solid fa-check text-green-600 text-2xl"></i>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
					<p class="text-gray-600 text-sm mb-5">Thank you. We will get back to you within 48 hours — in your language.</p>
					<button onclick={() => { sent = false; name = ''; email = ''; subject = ''; message = ''; }} class="text-sm text-green-700 hover:underline font-semibold">
						Send another message
					</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4" novalidate>
					<!-- Honeypot -->
					<div class="hidden" aria-hidden="true">
						<input name="website" type="text" bind:value={honeypot} tabindex="-1" autocomplete="off" />
					</div>

					<div class="grid sm:grid-cols-2 gap-4">
						<div>
							<label for="name" class="block text-sm font-semibold text-gray-700 mb-1.5">Name <span class="text-red-400">*</span></label>
							<input id="name" type="text" bind:value={name} required minlength="2" placeholder="Your name" autocomplete="name" class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-shadow placeholder:text-gray-400" />
						</div>
						<div>
							<label for="email" class="block text-sm font-semibold text-gray-700 mb-1.5">Email <span class="text-red-400">*</span></label>
							<input id="email" type="email" bind:value={email} required placeholder="your@email.com" autocomplete="email" class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-shadow placeholder:text-gray-400" />
						</div>
					</div>

					<div>
						<label for="subject" class="block text-sm font-semibold text-gray-700 mb-1.5">Topic</label>
						<select id="subject" bind:value={subject} class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white">
							{#each subjects as s}
								<option value={s.value}>{s.label}</option>
							{/each}
						</select>
					</div>

					<div>
						<label for="message" class="block text-sm font-semibold text-gray-700 mb-1.5">Message <span class="text-red-400">*</span></label>
						<textarea id="message" bind:value={message} required minlength="10" rows="5" placeholder="Write in Arabic, French, Tamazight, or English — whatever is easiest for you." class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-y transition-shadow placeholder:text-gray-400"></textarea>
						<p class="text-xs text-gray-400 mt-1 text-right">{message.length}/2000</p>
					</div>

					{#if errorMsg}
						<div class="bg-red-50 text-red-700 text-sm rounded-xl px-4 py-3 flex items-start gap-2 border border-red-100">
							<i class="fa-solid fa-circle-exclamation mt-0.5 shrink-0"></i>
							<span>{errorMsg}</span>
						</div>
					{/if}

					<button type="submit" disabled={sending || !valid} class="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-sm">
						{#if sending}
							<i class="fa-solid fa-spinner fa-spin"></i> Sending...
						{:else}
							<i class="fa-solid fa-paper-plane"></i> Send Message
						{/if}
					</button>

					<p class="text-xs text-gray-400 text-center">We never share your email. <a href="/privacy" class="hover:text-gray-600 underline">Privacy policy</a></p>
				</form>
			{/if}
		</div>
	</div>
</div>
