import * as pulumi from "@pulumi/pulumi";
import * as digitalocean from "@pulumi/digitalocean";


let droplet;
const region = digitalocean.Regions.NYC3;
const dropletTypeTag = new digitalocean.Tag("digidemo");
const userData =
  `#!/bin/bash
  sudo apt-get update
  sudo apt-get install -y nginx`;

droplet = new digitalocean.Droplet('digistorm-1',{
    image: "ubuntu-18-04-x64",
    region: region,
    privateNetworking: true,
    size: digitalocean.DropletSlugs.Droplet512mb,
    tags: [dropletTypeTag.id],
    userData: userData,
});