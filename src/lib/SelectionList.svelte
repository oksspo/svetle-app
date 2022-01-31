<script>
    import { quintOut } from 'svelte/easing';
    import { crossfade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    const [send, receive] = crossfade({
        duration: d => Math.sqrt(d * 200),

        fallback(node, params) {
            const style = getComputedStyle(node);
            const transform = style.transform === 'none' ? '' : style.transform;

            return {
                duration: 600,
                easing: quintOut,
                css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
            };
        }
    });

    export let user;
    let interests = [
        {description: 'Photography', selected: true},
        {description: 'Cooking', selected: false},
        {description: 'Movies', selected: false},
        {description: 'Plants', selected: false},
        {description: 'Dogs', selected: false},
    ];

    $:selectedInterests = interests.filter(i => i.selected);

    $:availableInterests = interests.filter(i => !i.selected);

    function mark(interest, done) {
        interest.selected = done;
        interests = interests.filter(t => t !== interest);
        interests = interests.concat(interest);
    }
</script>

<div class="interests-list">
    <ul>
        {#each availableInterests as interest (interest.description)}
            <li in:receive="{{key: interest.description}}"
                out:send="{{key: interest.description}}"
                animate:flip>
                <input type=checkbox on:change={() => mark(interest, true)}>
                {interest.description}
            </li>
        {/each}
    </ul>

    <ul class="selected-items">
        {#each selectedInterests as interest (interest.description)}
            <li class="selected"
                in:receive="{{key: interest.description}}"
                out:send="{{key: interest.description}}"
                animate:flip>
                <input type=checkbox on:change={() => mark(interest, false)}>
                {interest.description}
            </li>
        {/each}
    </ul>
</div>

<style>
    .interests-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
        max-width: 36em;
        margin: 0 auto;
    }

    li {
        list-style: none;
        position: relative;
        line-height: 1.2;
        padding: 0.5em 2.5em 0.5em 2em;
        margin: 0 0 0.5em 0;
        border-radius: 2px;
        user-select: none;
        border: 1px solid hsl(240, 8%, 70%);
        background-color:hsl(240, 8%, 93%);
        color: #333;
    }

    input[type="checkbox"] {
        position: absolute;
        left: 0.5em;
        top: 0.6em;
        margin: 0;
    }

    .selected {
        border: 1px solid hsl(240, 8%, 90%);
        background-color:hsl(240, 8%, 98%);
    }
</style>