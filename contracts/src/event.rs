use soroban_sdk::{Address, Env, Symbol};

pub(crate) fn set_admin(e: &Env, admin: Address, new_admin: Address) {
    let topics = (Symbol::short("set_admin"), admin);
    e.events().publish(topics, new_admin);
}
pub(crate) fn mint(e: &Env, to: Address, id: u32) {
    let topics = (Symbol::short("mint"), to);
    e.events().publish(topics, id);
}
pub(crate) fn set_authorized(e: &Env, admin: Address, id: Address, authorize: bool) {
    let topics = (Symbol::new(e, "set_authorized"), admin, id);
    e.events().publish(topics, authorize);
}
