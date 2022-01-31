<script context="module">
    export const load = async ({ page, fetch }) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${page.params.id}`);

        if (res.ok) {
            const user = await res.json();

            return {
                props: { user }
            };
        }

        const { message } = await res.json();

        return {
            error: new Error(message)
        };
    };
</script>

<script>
    import { goto } from '$app/navigation';
    import { fade } from 'svelte/transition';
    export let user;
</script>

<svelte:head>
    <title>Edit user</title>
</svelte:head>

<main transition:fade>
    <section class="grid grid-cols-2 gap-4 rounded border bg-white drop-shadow mb-5">
        <div class="bg-gray-200 text-center align-middle flex justify-center items-center">
            <i class="fas fa-user text-9xl text-gray-500"></i>
        </div>
        <form class="p-4">
            <div class="mb-3">
                <label>
                    <span class="text-blue-600 block mb-1">Name:</span>
                    <input bind:value={user.name} class="p-2 w-72 box-border border rounded"/>
                </label>
            </div>
            <div class="mb-3">
                <label>
                    <span class="text-blue-600 block mb-1">Username:</span>
                    <input bind:value={user.username} class="p-2 w-72 border rounded" />
                </label>
            </div>
            <div class="mb-3">
                <label>
                    <span class="text-blue-600 block mb-1">Email:</span>
                    <input type="email" bind:value={user.email} class="p-2 w-72 border rounded" />
                </label>
            </div>
            <div class="mb-3">
                <label>
                    <span class="text-blue-600 block mb-1">Address:</span>
                    <input bind:value={user.address.city} class="p-2 w-72 border rounded" />
                </label>
            </div>
            <div class="mb-3">
                <label>
                    <span class="text-blue-600 block mb-1">Phone:</span>
                    <input bind:value={user.phone} class="p-2 w-72 border rounded" />
                </label>
            </div>
            <div class="mb-3">
                <label>
                    <span class="text-blue-600 block mb-1">Website:</span>
                    <input bind:value={user.website} class="p-2 w-72 border rounded" />
                </label>
            </div>
        </form>
    </section>

    <footer class="flex justify-between">
        <button on:click={() => goto(`/users`)}
                class="text-white bg-gray-400 hover:bg-blue-500 p-2 w-24 text-center rounded-md">
            <i class="fas fa-angle-left"></i>
            Back
        </button>
        <button on:click={() => goto(`/users`)}
                class="text-white bg-blue-400 hover:bg-blue-500 p-2 w-24 text-center rounded-md">
            Save
        </button>
    </footer>
</main>