<script lang="ts">
	import { page } from '$app/state';

	let name = $state('');
	let email = $state('');
	let subject = $state(page.url.searchParams.get('subject') || '');
	let message = $state('');
	let sending = $state(false);
	let sent = $state(false);
	let error = $state('');

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
		error = '';

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name: name.trim(), email: email.trim(), subject, message: message.trim() })
			});

			if (!res.ok) throw new Error('Failed to send');
			sent = true;
		} catch {
			error = 'Something went wrong. Please try again or email us directly at contact@algeriansinKC.com';
		} finally {
			sending = false;
		}
	}
</script>

<svelte:head>
	<title>Contact — Algerians in KC</title>
	<meta name="description" content="Get in touch with the Algerians in KC team — for help, volunteer sign-up, directory listings, or anything else." />
	<link rel="canonical" href="https://algeriansinKC.com/contact" />
</svelte:head>

<div class="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 px-4">
	<div class="max-w-3xl mx-auto">
		<a href="/" class="text-green-200 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
			<i class="fa-solid fa-arrow-left text-xs"></i> Back to home
		</a>
		<h1 class="text-3xl md:text-4xl font-extrabold mb-2">Contact Us</h1>
		<p class="text-green-100 text-lg">We respond in Arabic, French, or English.</p>
	</div>
</div>

<div class="max-w-3xl mx-auto px-4 py-10">
	<div class="grid md:grid-cols-3 gap-8">

		<!-- Contact info -->
		<div class="space-y-4">
			<h2 class="font-bold text-gray-900">Reach us</h2>
			<div class="space-y-3">
				<a href="mailto:contact@algeriansinKC.com" class="flex items-start gap-3 text-sm text-gray-600 hover:text-green-600 transition-colors group">
					<div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
						<i class="fa-solid fa-envelope text-green-600 text-sm"></i>
					</div>
					<div>
						<div class="font-medium text-gray-800">Email</div>
						<div class="text-xs text-gray-500">contact@algeriansinKC.com</div>
					</div>
				</a>
			</div>

			<div class="pt-4 border-t border-gray-100">
				<h3 class="text-sm font-semibold text-gray-700 mb-3">Quick links</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="/community#volunteer" class="text-green-600 hover:underline">Volunteer sign-up</a></li>
					<li><a href="/community#list" class="text-green-600 hover:underline">List your business</a></li>
					<li><a href="/settle" class="text-green-600 hover:underline">Newcomer guide</a></li>
				</ul>
			</div>

			<div class="pt-4 border-t border-gray-100">
				<p class="text-xs text-gray-500 leading-relaxed">We are volunteers. We do our best to respond within 48 hours.</p>
			</div>
		</div>

		<!-- Form -->
		<div class="md:col-span-2">
			{#if sent}
				<div class="bg-green-50 rounded-2xl border border-green-200 p-8 text-center">
					<div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<i class="fa-solid fa-check text-green-600 text-2xl"></i>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
					<p class="text-gray-600 text-sm">Thank you for reaching out. We'll get back to you within 48 hours.</p>
					<button onclick={() => { sent = false; name = ''; email = ''; subject = ''; message = ''; }} class="mt-5 text-sm text-green-700 hover:underline font-medium">
						Send another message
					</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
					<div class="grid sm:grid-cols-2 gap-4">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
							<input
								id="name"
								type="text"
								bind:value={name}
								required
								placeholder="Your name"
								autocomplete="name"
								class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow"
							/>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								required
								placeholder="your@email.com"
								autocomplete="email"
								class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow"
							/>
						</div>
					</div>

					<div>
						<label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Topic</label>
						<select
							id="subject"
							bind:value={subject}
							class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white"
						>
							{#each subjects as s}
								<option value={s.value}>{s.label}</option>
							{/each}
						</select>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
						<textarea
							id="message"
							bind:value={message}
							required
							rows="5"
							placeholder="Write in Arabic, French, or English — whatever is easiest for you."
							class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-y transition-shadow"
						></textarea>
					</div>

					{#if error}
						<div class="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 flex items-start gap-2">
							<i class="fa-solid fa-circle-exclamation mt-0.5 shrink-0"></i>
							<span>{error}</span>
						</div>
					{/if}

					<button
						type="submit"
						disabled={sending || !name.trim() || !email.trim() || !message.trim()}
						class="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
					>
						{#if sending}
							<i class="fa-solid fa-spinner fa-spin"></i> Sending...
						{:else}
							<i class="fa-solid fa-paper-plane"></i> Send Message
						{/if}
					</button>
				</form>
			{/if}
		</div>
	</div>
</div>
