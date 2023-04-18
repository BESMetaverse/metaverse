#![no_std]
mod admin;
mod event;
mod metadata;
mod storage_types;

use crate::admin::{has_administrator, read_administrator, write_administrator};
use crate::metadata::{get_base_uri, get_nft_counter, total_supply, TokenMetadata};
use soroban_sdk::{contractimpl, vec, Address, Env, String, Symbol, Vec};
pub struct Contract;

#[contractimpl]
impl Contract {
    pub fn initialize(env: Env, admin: Address, supply: u32) {
        if has_administrator(&env) {
            panic!("already initialized")
        }
        write_administrator(&env, &admin);
        env.storage().set(&"nftCounter", &(0));
        env.storage().set(
            &"baseURI",
            &"https://gateway.pinata.cloud/ipfs/QmVxgKAbxYwVLPNE2DQwXvimhmuW5wtk2YHiZaJCkLCUCG/",
        );
        env.storage().set(&"nftSupply", &supply);
    }

    pub fn ping(env: Env, from: Symbol) -> Vec<Symbol> {
        vec![&env, Symbol::short("Hello"), from]
    }
    pub fn mint_nft(env: Env, to: Address) {
        to.require_auth();
        let new_token_id = get_nft_counter(&env);
        let base_uri = get_base_uri(&env);
        if get_nft_counter(&env) >= total_supply(&env) {
            panic!("MAX SUPPLY REACHED")
        }

        let metadata = TokenMetadata {
            id: new_token_id,
            token_base_uri: base_uri,
            owner: to.clone(),
        };
        env.storage().set(&metadata.id, &metadata);
        env.storage().set(&"nftCounter", &(new_token_id + 1));
        event::mint(&env, to, new_token_id)
    }

    pub fn set_base_uri(env: Env, base_uri: String) {
        let admin = read_administrator(&env);
        admin.require_auth();
        env.storage().set(&"baseURI", &base_uri)
    }

    pub fn get_base_uri(env: Env) -> String {
        return get_base_uri(&env);
    }

    pub fn get_nft(env: Env, id: u32) -> TokenMetadata {
        let symbol_result = env.storage().get_unchecked(&id);
        let symbol: TokenMetadata = match symbol_result {
            Ok(s) => s,
            Err(_e) => {
                panic!("Token not found")
            }
        };
        return symbol;
    }
    pub fn owner_of(env: Env, id: u32) -> Address {
        let token_result = env.storage().get_unchecked(&id);
        let token: TokenMetadata = match token_result {
            Ok(s) => s,
            Err(_e) => {
                panic!("Token not found")
            }
        };
        return token.owner;
    }

    pub fn token_base_uri(env: Env, id: u32) -> String {
        let token_result = env.storage().get_unchecked(&id);
        let token: TokenMetadata = match token_result {
            Ok(s) => s,
            Err(_e) => {
                panic!("Token not found")
            }
        };
        return token.token_base_uri;
    }
    pub fn set_admin(env: Env, new_admin: Address) {
        let admin = read_administrator(&env);
        admin.require_auth();
        write_administrator(&env, &new_admin);
        event::set_admin(&env, admin, new_admin);
    }

    pub fn current_nft_supply(env: Env) -> u32 {
        let supply = get_nft_counter(&env);
        return supply;
    }

    pub fn total_nft_supply(env: Env) -> u32 {
        let max_supply = total_supply(&env);
        return max_supply;
    }
}
