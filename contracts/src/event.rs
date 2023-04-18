use soroban_sdk::{Address, Env, Symbol};

pub(crate) fn set_admin(e: &Env, admin: Address, new_admin: Address) {
    let topics = (Symbol::short("set_admin"), admin);
    e.events().publish(topics, new_admin);
}
pub(crate) fn mint(e: &Env, to: Address, id: u32) {
    let topics = (Symbol::short("mint"), to);
    e.events().publish(topics, id);
}
