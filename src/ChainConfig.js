var config = {
  core_asset: "CORE",
  address_prefix: "GPH",
  expire_in_secs: 15,
  expire_in_secs_proposal: 24 * 60 * 60,
  review_in_secs_committee: 24 * 60 * 60,
  networks: {
    RSquared: {
      core_asset: "RQRX",
      address_prefix: "RQRX",
      chain_id:
        "a89f8a1cd2a699e5c521b87cc6210198ed0aad9e2a483322c6db2c391b278f64"
    },
    RSquaredDev: {
      core_asset: "RQRX",
      address_prefix: "RQRX",
      chain_id:
        "a89f8a1cd2a699e5c521b87cc6210198ed0aad9e2a483322c6db2c391b278f64"
    }
  },

  /** Set a few properties for known chain IDs. */
  setChainId: chain_id => {
    let result = Object.entries(config.networks).find(
      ([network_name, network]) => {
        if (network.chain_id === chain_id) {
          config.network_name = network_name;

          if (network.address_prefix) {
            config.address_prefix = network.address_prefix;
          }
          return true;
        }
      }
    );

    if (result) return { network_name: result[0], network: result[1] };
    else console.log("Unknown chain id (this may be a testnet)", chain_id);
  },

  reset: () => {
    config.core_asset = "CORE";
    config.address_prefix = "GPH";
    config.expire_in_secs = 15;
    config.expire_in_secs_proposal = 24 * 60 * 60;

    console.log("Chain config reset");
  },

  setPrefix: (prefix = "GPH") => (config.address_prefix = prefix)
};

export default config;
