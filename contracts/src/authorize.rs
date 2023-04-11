use crate::storage_types::DataKey;
use soroban_sdk::{Address, Env};

pub fn is_authorized(e: &Env, addr: Address) -> bool {
    let key = DataKey::State(addr);
    let auth_result = e.storage().get_unchecked(&key);
    let auth = match auth_result {
        Ok(s) => s,
        Err(_e) => {
            panic!("ERROR");
        }
    };
    return auth;
}

pub fn write_authorization(e: &Env, addr: Address, is_authorized: bool) {
    let key = DataKey::State(addr);
    e.storage().set(&key, &is_authorized);
}
