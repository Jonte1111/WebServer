<script>
    import { flip } from "svelte/animate";
    import { quintOut } from "svelte/easing";
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

<html lang="en">
    <body>
        <div class="main">
            <div class="linkList">
                <ul>
                    {#each links as link (link.id)}
                        <li>
                            <div >
                                <a href="{link.link}">{link.name}</a>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </body>
</html>

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

    ul {
        list-style-type: none;
    }

    .linkList > ul > li > div{
        display: block;
        float: left;
        padding: 1%;
        outline-color: black;
        outline-style: solid;
        margin-right: 1%;
    }
    html {
        background-color: darkslategrey;
    }
</style>



