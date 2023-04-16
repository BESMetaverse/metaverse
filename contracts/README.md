
## Setup
Soroban contracts are small programs written in the Rust programming language.

To build and develop contracts you need only a couple prerequisites:

A Rust toolchain
An editor that supports Rust
Soroban CLI

### Install Rust
Install rustup with the following command.
```curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Install Target
Install the `wasm32-unknown-unknown` target.

```
rustup target add wasm32-unknown-unknown
```

### Install the Soroban CLI
The Soroban CLI can execute Soroban contracts in the same environment the contract will execute on network, however in a local sandbox.

Install the Soroban CLI using cargo install.
```
cargo install --locked --version 0.7.0 soroban-cli
```

## Build Project
### Run Test
Run cargo test and watch the contract run. You should see the following output:
`cargo test`
```running 1 test
test test::test ... ok
```

### Build
To build a Soroban contract to deploy or run, use the `cargo build` command.
```
cargo build --target wasm32-unknown-unknown --release
```

A `.wasm` file will be outputted in the target directory. The `.wasm` file is the built contract.
```
target/wasm32-unknown-unknown/release/nft_project.wasm
```

## Deploy to FutureNet

Generate a key by going to the [Stellar Laboratory](https://laboratory.stellar.org/#account-creator?network=futurenet). Make note of both the G... and S... keys. The G... key is the public key and will also be the account ID. The S... key is the secret key and is that you use to control the account.

Create an account on the Futurenet network by making a request to the Friendbot. Specify as the `addr` the `G...` key of your account.
```
curl "https://friendbot-futurenet.stellar.org/?addr=G..."
```
Once you have an account on the network, we'll use the code we wrote in Write a Contract and the resulting `.wasm` file we built in Build as our contract to deploy. Run the following commands to deploy the contract to the network. Use the `S...` key as the secret key.
```
soroban contract deploy \
    --wasm target/wasm32-unknown-unknown/release/nft_project.wasm \
    --source S... \
    --rpc-url https://rpc-futurenet.stellar.org:443 \
    --network-passphrase 'Test SDF Future Network ; October 2022'
```
 
 A contract ID will be outputted.
```
cd4dae2c409c433b1e1d83994a20214d3e5f60bdd3a817978d8aa7c797864313
```
Using the contract ID that was outputted, use the `soroban-cli` to invoke the `hello` function with a single argument `friend`.
```
soroban contract invoke \
    --id 11b995d643c62c57d29fe8688558b9801702ff78bbf4ec3cc68c9017430f7ee4 \
    --source S... \
    --rpc-url https://rpc-futurenet.stellar.org:443 \
    --network-passphrase 'Test SDF Future Network ; October 2022' \
    -- ping \
    --from friend
```
The following output should appear.
```
["Hello", "friend"]
```

## Contract  Functions
### INVOKE INITIALIZE
```
soroban contract invoke \
--id 2101c55919d5836b2qwqbd425d9b81f51ba4855d0543325fc8c58aded04379350 \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- initialize \
--admin <PUBLIC ADDRESS OF THE ADMIN> \
--supply <TOTAL_SUPPLY>
```

### INVOKE MINT NFT
```
soroban contract invoke \
--id 2101c55919d5836b253bd425d9b81f51ba4855d0543325fc8c58aded04379350 \
--source S.. \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- mint_nft \
--to <MINTER PUBLIC ADDRESS>
```

### INVOKE GET NFT
```
soroban contract invoke \
--id 40f165538097420d43ee815c75b7d5d96a9929331d29ea36569aa6db37090325 \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- get_nft \
--id <TOKEN ID>
```

### WHITELIST ADDRESS
```
soroban contract invoke \
--id 2101c55919d5836b253bd425d9b81f51ba4855d0543325fc8c58aded04379350 \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- set_authorization \
--id <ADDRESS TO WHITELIST> \
--authorize
```

### GET BASE URI
```
soroban contract invoke \
--id 2101c55919d5836b253bd425d9b81f51ba4855d0543325fc8c58aded04379350 \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- get_base_uri
```

### SET BASE URI
```
soroban contract invoke \
--id 2101c55919d5836b253bd425d9b81f51ba4855d0543325fc8c58aded04379350 \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- set_base_uri \
--base_uri <NEW BASE-URI>
```
### SET ADMIN
```
soroban contract invoke \
--id 2101c55919d5836b253bd425d9b81f51ba4855d0543325fc8c58aded04379350 \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- set_admin \
--new_admin <PUBLIC ADDRESS OF NEW ADMIN>
```
### GET CURRENT SUPPLY
```
soroban contract invoke \
--id 2101c55919d5836b253bd425d9b81f51ba4855d0543325fc8c58aded04379350 \
--source SAJPJB6JZ7HMDUO5VPPFLA5DKPS2F5JBAHG3DXFDEUJ2ZVOES447VEG4 \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- current_nft_supply
```

### GET TOTAL NFT SUPPLY
```
soroban contract invoke \
--id 2101c55919d5836b253bd425d9b81f51ba4855d0543325fc8c58aded04379350 \
--source S.... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- total_nft_supply
```

### GET OWNER OF NFT
```
soroban contract invoke   \
--id 59276e2b11fcEe298b3379a0b295af36196e01dd2653572026c9d83916c5aff4   \
--source S...    \
--rpc-url https://rpc-futurenet.stellar.org:443    \
--network-passphrase 'Test SDF Future Network ; October 2022'  \
-- owner_of \
--id <TOKEN ID OF NFT>
```

### GET TOKEN BASE-URI OF NFT
```
soroban contract invoke   \
--id 59276e2b11fcEe298b3379a0b295af36196e01dd2653572026c9d83916c5aff4   \
--source S...    \
--rpc-url https://rpc-futurenet.stellar.org:443    \
--network-passphrase 'Test SDF Future Network ; October 2022'  \
-- token_base_uri \
--id <TOKEN ID OF NFT>
```
