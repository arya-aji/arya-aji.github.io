<script lang="ts">
  interface Props {
    src: string;
    alt?: string;
    position?: 'left' | 'right';
    width?: string;
  }

  let { src, alt = '', position = 'right', width = '280px' }: Props = $props();
</script>

<figure class="float-image float-{position}" style="--img-width: {width}">
  <img {src} {alt} />
  {#if alt}
    <figcaption>{alt}</figcaption>
  {/if}
</figure>

<style>
  .float-image {
    width: var(--img-width);
    margin-bottom: 1em;
  }

  .float-right {
    float: right;
    margin-left: 1.5em;
  }

  .float-left {
    float: left;
    margin-right: 1.5em;
  }

  .float-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid var(--ctp-surface1);
    display: block;
  }

  .float-image figcaption {
    margin-top: 6px;
    font-size: 0.78rem;
    color: var(--ctp-overlay1);
    text-align: center;
    font-style: italic;
  }

  @media (max-width: 600px) {
    .float-image {
      float: none;
      width: 100%;
      margin: 1em 0;
    }
  }
</style>
