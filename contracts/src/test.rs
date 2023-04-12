#![cfg(test)]

use super::{Contract, ContractClient};
use soroban_sdk::{symbol, vec, Env};

#[test]
fn test() {
    let env = Env::default();
    let contract_id = env.register_contract(None, Contract);
    let client = ContractClient::new(&env, &contract_id);

    let words = client.ping(&Symbol::short("Dev"));
    assert_eq!(
        words,
        vec![&env, Symbol::short("Hello"), Symbol::short("Dev"),]
    );
}
