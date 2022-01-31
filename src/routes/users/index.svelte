<script>
    import { goto } from '$app/navigation';
    import { fade } from 'svelte/transition';
    import { users } from '../../stores/userstore';

    function editUser(id) {
        goto(`users/${id}`);
    }
</script>

<svelte:head>
    <title>Users</title>
</svelte:head>

<div class="bg-white rounded drop-shadow text-gray-500" transition:fade>
    <div class="divide-y divide-gray-200">
        <header class="grid grid-cols-8 gap-2 p-3 uppercase bg-gray-200">
            <span>Name</span>
            <span class="col-span-2">Email</span>
            <span class="col-span-2">Phone</span>
            <span>Address</span>
            <span>Company</span>
        </header>

        {#each $users as user (user.id)}
            <div class="grid grid-cols-8 p-2 hover:bg-gray-200">
                <span>{user.name}</span>
                <span class="col-span-2">{user.email}</span>
                <span class="col-span-2">{user.phone}</span>
                <span>{user.address.city}</span>
                <span>{user.company.name}</span>
                <div class="text-right">
                    <button class="text-white bg-blue-400 hover:bg-blue-500 p-2 w-10 text-center rounded-md"
                            on:click={() => editUser(user.id)}>
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>
        {/each}
    </div>
</div>