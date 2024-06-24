
## Setup
Soroban contracts are small programs written in the Rust programming language.

To build and develop contracts you need only a couple prerequisites:

A Rust toolchain
An editor that supports Rust
Soroban CLI

### Install Rust
Install rustup with the following command.
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
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
```
running 1 test
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
This function serves to initialize the NFT contract and define the smart contract's admin and the total supply of NFTs. When invoking this function, it is necessary to provide the `PUBLIC ADDRESS OF THE ADMIN`  and the `TOTAL_SUPPLY` of NFTs. To execute the initialization function via the command line interface (CLI), use the following command.
```
soroban contract invoke \
--id <CONTRACT ID> \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- initialize \
--admin <PUBLIC ADDRESS OF THE ADMIN> \
--supply <TOTAL_SUPPLY>
```

### INVOKE MINT NFT
The mint function is responsible for minting an NFT and assigning ownership to the NFT's creator. When invoking this function, it is necessary to provide the `MINTER PUBLIC ADDRESS`. To execute the mint_nft function via the Soroban Command Line Interface (CLI), use the following command.
```
soroban contract invoke \
--id <CONTRACT ID> \
--source S.. \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- mint_nft \
--to <MINTER PUBLIC ADDRESS>
```

### INVOKE GET NFT
To retrieve information about a specific minted NFT, the 'get_nft' function must be invoked, and the corresponding `TOKEN ID` must be provided as a parameter. To execute the get_nft function via the Soroban Command Line Interface (CLI), use the following command.
```
soroban contract invoke \
--id <CONTRACT ID> \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- get_nft \
--id <TOKEN ID>
```

### GET BASE URI
To obtain the base URI where the metadata is stored, it is necessary to execute the 'get_base_uri' function via the soroban-cli command.

```
soroban contract invoke \
--id <CONTRACT ID> \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- get_base_uri
```

### SET BASE URI
To modify the base URI where the metadata of an NFT is stored, it is necessary to provide the `NEW BASE-URI` as a parameter while invoking the relevant function. The command for updating the base URI is:
```
soroban contract invoke \
--id <CONTRACT ID>  \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- set_base_uri \
--base_uri <NEW BASE-URI>
```
**Only Admin can call this function**

### SET ADMIN
To modify the administrator of a Soroban contract, the 'set_admin' function can be utilized. This can be executed by providing the `PUBLIC ADDRESS OF NEW ADMIN` as a parameter while invoking the function. The command to update the admin is 

```
soroban contract invoke \
--id <CONTRACT ID> \
--source S... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- set_admin \
--new_admin <PUBLIC ADDRESS OF NEW ADMIN>
```
**Only Admin can call this function**

### GET CURRENT SUPPLY
To retrieve the total number of minted tokens up to the current date, it is necessary to invoke the 'current_nft_supply' function. This function will return the count of the total number of minted NFTs.

```
soroban contract invoke \
--id <CONTRACT ID> \
--source S.. \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- current_nft_supply
```

### GET TOTAL NFT SUPPLY
To retrieve the total number of nft that can be minted , it is necessary to invoke the 'total_nft_supply' function. This function will return the count of the total number of minted NFTs.

```
soroban contract invoke \
--id <CONTRACT ID> \
--source S.... \
--rpc-url https://rpc-futurenet.stellar.org:443 \
--network-passphrase 'Test SDF Future Network ; October 2022' \
-- total_nft_supply
```

### GET OWNER OF NFT
To obtain the owner of a specific NFT, it is necessary to execute the 'owner_of' function and provide the corresponding `TOKEN ID OF NFT` as a parameter. This function will return the public address of the NFT owner. The soroban-cli command to get the owner of the NFT is 
```
soroban contract invoke   \
--id <CONTRACT ID>   \
--source S...    \
--rpc-url https://rpc-futurenet.stellar.org:443    \
--network-passphrase 'Test SDF Future Network ; October 2022'  \
-- owner_of \
--id <TOKEN ID OF NFT>
```

### GET TOKEN BASE-URI OF NFT
To retrieve the base URI of a particular NFT where the metadata of that NFT is stored, 'token_base_uri' function of the contract will be called and` TOKEN ID OF NFT` will be passed as a parameter.

```
soroban contract invoke   \
--id <CONTRACT ID>   \
--source S...    \
--rpc-url https://rpc-futurenet.stellar.org:443    \
--network-passphrase 'Test SDF Future Network ; October 2022'  \
-- token_base_uri \
--id <TOKEN ID OF NFT>
```
