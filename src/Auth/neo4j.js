import neo4j from 'neo4j-driver';
const url = 'bolt://localhost:7687';
const user = 'neo4j';
const password = '2003';
const driver = neo4j.driver(url,neo4j.auth.basic(user,password));
export function Driver(){
    return driver;
}