<script>
    let links = [
        {id: "sab", link: "http://192.168.0.218:8080", name: "SABnzbd"},
        {id: "proxmox", link: "http://192.168.0.99:8006", name: "ProxMox"},
        {id: "jellyfin", link: "http://192.168.0.99:8096", name: "JellyFin"},
        {id: "jellyserr", link: "http://192.168.0.218:5055", name: "JellySerr"},
        {id: "sonarr", link: "http://192.168.0.218:8989", name: "Sonarr"},
        {id: "readarr", link: "http://192.168.0.218:8787", name: "Readarr"},
        {id: "radarr", link: "http://192.168.0.218:7878", name: "Radarr"},
        {id: "bazarr", link: "http://192.168.0.218:6767", name: "Bazarr"}
    ];
</script>

<div class="main">
    <div class="linkList">
        <ul>
            {#each links as link (link.id)}
                <li>
                    <a href="{link.link}">{link.name}</a>
                </li>
            {/each}
        </ul>
    </div>
</div>
<style>
    a {
        font-size: 2em;
        font-weight: 700;
        font-family: 'Comic Sans MS';
        color: crimson;
        text-decoration: none;
    }
    a:hover {
        color: coral;
    }

    .linkList > ul > li{
        padding: 1%;
        float: left;
    }

    .linkList {
        
        display: block;
    }

    ul {
        list-style-type: none;
    }
</style>



